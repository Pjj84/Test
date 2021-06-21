'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class JourniesSchema extends Schema {
  up () {
    this.create('journies', (table) => {
      // The Schema when there is only one table for journies
      table.increments('id')
      table.foreign('storyID').references('stories.id').notNullable().onDelete('CASCADE')
      table.foreign('releaserID').references('users.id').notNullable().onDelete('CASCADE')
      table.foreign('founderID').references('users.id').onDelete('CASCADE')
      table.string('releasedIn')
      table.string('caughtAt')
      table.text('description','longtext')
      table.timestamps()
      //-------------------------------------------------------------------------------------------------------------------------
      // The Schemas when there are two splited tables for wild and controlled journies
      /* Controlled
      table.increments('id')
      table.foreign('storyID').references('stories.id').notNullable().onDelete('CASCADE')
      table.foreign('releaserID').references('users.id').notNullable().onDelete('CASCADE')
      table.foreign('founderID').references('users.id').notNullable().onDelete('CASCADE')
      table.text('description','longtext')
      table.timestamps()
      */
      /* Wild
      table.increments('id')
      table.foreign('storyID').references('stories.id').notNullable().onDelete('CASCADE')
      table.foreign('releaserID').references('users.id').notNullable().onDelete('CASCADE')
      table.foreign('founderID').references('users.id').onDelete('CASCADE')
      table.string('releasedIn')
      table.string('caughtAt')
      table.text('description','longtext')
      table.timestamps()
      */
    })
  }

  down () {
    this.drop('journies')
  }
}

module.exports = JourniesSchema
