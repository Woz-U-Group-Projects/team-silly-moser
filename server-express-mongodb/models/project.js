const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  owner: {
    type: Object,
    required: true
  },
  teamMembers: [
    {
      email: {
        type: String
      },
      name: {
        type: String
      }
    }
  ],
  createdDate: {
    type: Date,
    default: Date.now,
    required: false
  }
});

module.exports = Project = mongoose.model("projects", ProjectSchema);
