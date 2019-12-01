
const app = require('../src/app')
const knex = require('knex')
require('dotenv').config();

describe('App', () => {
  it('GET / responds with 200 containing "Hello, world!"', () => {
    return supertest(app)
      .get('/')
      .expect(200, 'Hello, world!')
  })
})


describe('Trips Unplanned API:', function () {
  let db;
  let comments = [
    { "id": 1,
    "username": 'some name1',
    "comment": 'some comment1'
   },
   { "id": 2,
   "username": 'some name2',
   "comment": 'some comment2'
  },
  ]

  before('make knex instance', () => {  
    db = knex ({
      client: 'pg',
      connection: process.env.TEST_DATABASE_URL,
    })
    app.set('db', db)
  });
  
  before('cleanup', () => db.raw('TRUNCATE TABLE comments RESTART IDENTITY;'));

  afterEach('cleanup', () => db.raw('TRUNCATE TABLE comments RESTART IDENTITY;')); 

  after('disconnect from the database', () => db.destroy()); 

  describe('GET /api/comments', () => {

    beforeEach('insert some ideas', () => {
      return db('comments').insert(comments);
    })

    it('should respond to GET `/api/comments` with an array of ideas and status 200', function () {
      return supertest(app)
        .get('/api/comments')
        .expect(200)
        .expect(res => {
          expect(res.body).to.be.a('array');
          expect(res.body).to.have.length(comments.length);
          res.body.forEach((idea) => {
            expect(idea).to.be.a('object');
            expect(idea).to.include.keys('id', 'username', 'comment');
          });
        });
    });

  });

  describe('POST /api/comments', function () {

    it('should create and return a new todo when provided valid data', function () {
      const newComment = { 
        "id": 1,
        "username": 'some name1',
        "comment": 'some comment1'
     }

      return supertest(app)
        .post('/api/comments')
        .send(newComment)
        .expect(201)
        .expect(res => {
          expect(res.body).to.be.a('object');
          expect(res.body).to.include.keys('id', 'username', 'comment');
          expect(res.body.id).to.equal(newComment.id);
          expect(res.body.username).to.equal(newComment.username);
          expect(res.body.comment).to.equal(newComment.comment);
        });
    });

  });
});