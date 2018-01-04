'use strict';


const mongoose = require('mongoose'),
      Image = mongoose.model('Image');

exports.getAll = function(req, res) {
  Image.find({}, function(err, image) {
    if (err)
      res.send(err);
    res.json(image);
  });
};

exports.create = function (req, res) {
  const newImage = new Image(req.body);
  newImage.save(function(err, image) {
    if (err)
      res.send(err);
    res.json(image);
  });
};

exports.getById = function (req, res) {
  Image.findById(req.params.imageId, function(err, image) {
    if (err)
      res.send(err);
    res.json(image);
  });
};

exports.updateById = function (req, res) {
  Image.findOneAndUpdate({_id: req.params.imageId}, req.body, {new: true}, function(err, image) {
    if (err)
      res.send(err);
    res.json(image);
  });
};

exports.deleteById = function (req, res) {
  Image.remove({
    _id: req.params.imageId
  }, function(err, image) {
    if (err)
      res.send(err);
    res.json({ message: 'Image successfully deleted' });
  });
};

// finish with this
exports.downloadImg = function (req, res) {
  Image.findById(req.params.imageId, function(err, image) {
    if (err)
      res.send(err);
    res.download(image.url);
  });
}
