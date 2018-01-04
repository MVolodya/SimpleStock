'use strict';

module.exports = function(app) {
  var images = require('../controllers/imageController');

  // images Routes
  app.route('/images')
    .get(images.getAll)
    .post(images.create);


  app.route('/images/:imageId')
    .get(images.getById)
    .put(images.updateById)
    .delete(images.deleteById);

  // test this
  app.route('/download-image/:imageId')
    .get(images.downloadImg);
};
