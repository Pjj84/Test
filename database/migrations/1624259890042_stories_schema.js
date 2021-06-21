'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StoriesSchema extends Schema {
  up () {
    this.create('stories', (table) => {
      table.increments('id')
      table.foreign('bookID').references('book.id').notNullable().onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('stories')
  }
}

module.exports = StoriesSchema
