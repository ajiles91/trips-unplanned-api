const knex = require('knex')
const CommentsService = {
    getAllComments(knex) {
        return knex.select()
        //
        .table('comments')
    },

    addNewComment(knex, newComment){
        return knex
        .insert(newComment)
        .into('comments')
        .returning('*')
        .then(
            rows => rows[0]
        )
    },

}
module.exports = CommentsService