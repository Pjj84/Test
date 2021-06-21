'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserStatisticsSchema extends Schema {
  up () {
    this.create('user_statistics', (table) => {
      table.increments('id')
      table.foreign('userID').references('uesrs.id').notNullable().onDelete("CASCADE")
      table.integer('booksRegistered').defaultTo(0)
      table.integer('wildReleases').defaultTo(0)
      table.integer('controlledReleases').defaultTo(0)
      table.integer('wildReleaseCatches').defaultTo(0)
      table.integer('controlledReleaseCatches').defaultTo(0)
      table.integer('newMemberRefferals').defaultTo(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('user_statistics')
  }
}

module.exports = UserStatisticsSchema
