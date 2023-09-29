require('dotenv').config()
import bodyParser from 'body-parser';
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV, PORT } = require('./config')
const errorHandler = require('./api/error-handler')
const commentsRouter = require('./api/comments-router')

const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.get('/api', (req, res) => {
  res.send('hello from api route')
})

app.use('api/comments',commentsRouter)

module.exports = app