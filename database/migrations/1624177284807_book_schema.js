'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BookSchema extends Schema {
  up () {
    this.create('books', (table) => {
      table.increments('id')
      table.foreign('ownerID').references('users.id').notNullable()
      table.integer('isbn').unique().notNullable();
      table.text('description','longtext')
      table.string('authorName').notNullable()
      table.string('coverImage')
      table.timestamps()
    })
  }

  down () {
    this.drop('books')
  }
}

module.exports = BookSchema
