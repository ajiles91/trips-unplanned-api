require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const { NODE_ENV } = require('./config')
const errorHandler = require('./error-handler')
const commentsRouter = require('./comments-router')
const {PORT} = require('./config')
// const db = require("./data/db.js");
// import db from '../data/db.js'
const app = express()

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server at app.js listening at http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.get('/api', (req, res) => {
  res.send('hello from api route')
})

app.use('api/comments', commentsRouter)
app.use(errorHandler)

module.exports = app