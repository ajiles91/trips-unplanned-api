const CommentsService = {
    getAllIdeas(knex) {
        return knex.select('*').from('comments')
    },

    addNewIdea(knex, newIdea){
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