'use strict'

const Model = require('trails-model')

/**
 * @module Todo
 * @description Todo
 */
module.exports = class Todo extends Model {

  static config () {
  }

  static schema () {
    return {
      name: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      date: {
        type: 'datetime'
      }
    }
  }
}
