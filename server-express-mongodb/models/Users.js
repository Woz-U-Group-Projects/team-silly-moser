const mongoose = require('mongoose')

// const userSchema = new mongoose.Schema({
//   username: {
//     type: String,
//     required: [true, 'Username is required']
//   },
//   created: {
//     type: Date,
//     required: [true, 'Created date is required']
//   }
// })

// module.exports = userSchema




// "use strict";

// const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  UserProjects:{
    type: Array,
  required: false}
});

module.exports = User = mongoose.model("users", UserSchema);
