const CommentsService = {
    getAllComments(knex) {
        return knex.select('*').from('comments')
    },

    addNewComment(knex, newIdea){
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