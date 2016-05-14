/**
 * Routes Configuration
 * (trails.config.routes)
 *
 * Configure how routes map to views and controllers.
 *
 * @see http://trailsjs.io/doc/config/routes.js
 */

'use strict'

module.exports = [

  /**
   * Constrain the DefaultController.info handler to accept only GET requests.
   */
  {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  },
   {
    method: [ 'GET' ],
    path: '/api/v1/default/info',
    handler: 'DefaultController.info'
  },
   {
    method: [ 'put' ],
    path: '/api/v1/todo/update',
    handler: 'TodoController.info'
  },
   {
    method: [ 'post' ],
    path: '/api/v1/todo/update',
    handler: 'TodoController.info'
  },
  //   'put /api/todo': 'TodoController.update',
  // // 'post /api/todo/:id': 'TodoController.create',  
  // 'post /api/todo': 'TodoController.create',
]
