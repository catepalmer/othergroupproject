exports.up = (knex, Promise) => {
    return knex.schema.createTable('profiles', (table) => {
      table.increments('id').primary()
      table.string('name')
      table.string('description')
      table.text('image')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('profiles')
  }