exports.up = (knex, Promise) => {
    return knex.schema.createTable('answers', (table) => {
      table.integer('question_id')
      table.integer('answer_id')
      table.string('answer')
      table.string('name')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('answers')
  }