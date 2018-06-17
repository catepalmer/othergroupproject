exports.up = (knex, Promise) => {
    return knex.schema.createTable('questions', (table) => {
      table.increments('id').primary()
      table.string('question')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('questions')
  }