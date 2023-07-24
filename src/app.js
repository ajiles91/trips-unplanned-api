require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const knex = require('knex')
const { DATABASE_URL} = require('./config')
const errorHandler = require('./error-handler')
const commentsRouter = require('./comments-router')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

const db = knex({
    client: 'pg',
    connection: DATABASE_URL,
  })

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())
app.set('db', db)

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.use(commentsRouter)
app.use(errorHandler)

module.exports = app