'use strict';

module.exports = function(app) {
  var users = require('../controllers/userController.js');

  // images Routes
  app.route('/users')
    .get(users.getAll)
    .post(users.create);

  app.route('/users/:userEmail')
    .get(users.getByEmail);
};
