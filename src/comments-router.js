const express = require('express');
const CommentsService = require('./comments-service')

const commentsRouter = express.Router()
const jsonParser = express.json() 

commentsRouter
.route('/api')
.get((req,res,next) => {
    const knexInstance = req.app.get('db')
    CommentsService.getAllComments(knexInstance)
        .then(comments => {
            res.json(comments)
        })
    .catch(next)    
})

.post(jsonParser, (req, res, next) => {
    const { username, comment } = req.body
    const newComment = { username, comment }

    for (const [key, value] of Object.entries(newComment)) {
        if (value == null) {
            return res.status(400).json({
                error: { message: `Missing '${key}' in submission` }
            })
        }
    }

    CommentsService.addNewComment(
        req.app.get('db'), newComment
    )
    .then(comment => {
        res.status(201).json(comment)
    })
    .catch(next)
})

module.exports = commentsRouter