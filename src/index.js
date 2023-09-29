const app = require('./app')
const knex = require('knex')
// const db = require("./data/db.js");
const { DATABASE_URL} = require('./config')

const db = knex({
  client: 'pg',
  connection: DATABASE_URL,
})

app.set('db', db)

// module.exports = {app};