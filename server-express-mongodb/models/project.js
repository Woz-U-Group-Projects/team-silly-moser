// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // Create Schema
// const ProjectSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   owner: {
//     type: Object,
//     required: true
//   },
//   teamMembers: [
//     {
//       email: {
//         type: String
//       },
//       name: {
//         type: String
//       }
//     }
//   ],
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = Project = mongoose.model("projects", ProjectSchema);


"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  name: { type: String, required: true },
  createdBy: { type: String, required: true }
});

// Duplicate the ID field.
ProjectSchema.virtual("id").get(function() {
  return this._id.toHexString();
});

// Ensure virtual fields are serialised.
ProjectSchema.set("toJSON", {
  virtuals: true
});

module.exports = mongoose.model("Project", ProjectSchema);
