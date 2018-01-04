'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ImageSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the image'
  },
  tags: {
    type: [{
      type: String
    }],
    default: ['all']
  },
  url: {
    type: String,
    required: 'url'
  },
  author: {
    name: String,
    email: String,
    id: String
  },
  comments: [
    {
      author: {
        name: String,
        email: String,
        id: String
      },
      text: String,
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Image', ImageSchema);
