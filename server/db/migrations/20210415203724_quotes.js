exports.up = (knex) => {
  return knex.schema.createTable('Quotes', (table) => {
    table.increments('id').primary()
    table.string('quote')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('Quotes')
}
