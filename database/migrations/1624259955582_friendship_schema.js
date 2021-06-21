'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FriendshipSchema extends Schema {
  up () {
    this.create('friendships', (table) => {
      table.increments()
      table.foreign('senderID').references('users.id').notNullable().onDelete('CASCADE')
      table.foreign('receiverID').references('users.id').notNullable().onDelete('CASCADE')
      table.enu('status',['PENDING','ACCEPTED'],{
        useNative: true,
        enumName: 'friendship_status',
        existingType: false
      })
      table.timestamps()
    })
  }

  down () {
    this.drop('friendships')
  }
}

module.exports = FriendshipSchema
