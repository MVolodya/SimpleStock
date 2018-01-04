'use strict';


const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let UserSchema = new Schema({
  name: {
    type: String,
    required: 'how can we call you?'
  },
  email: {
    type: String,
    required: 'email'
  },
  password: {
    type: String,
    required: 'pass'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
