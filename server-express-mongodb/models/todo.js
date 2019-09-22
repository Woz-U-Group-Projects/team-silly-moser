// var mongoose = require('mongoose')

// // Define collection and schema for todo item
// var todo = new mongoose.Schema({
//   name: {
//     type: String
//   },
//   done: {
//     type: Boolean
//   }
// },
//   {
//     collection: 'todos'
//   }
// )

// module.exports = mongoose.model('Todo', todo)


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    todo_description: {
        type: String
    },
    todo_responsible: {
        type: String
    },
    todo_priority: {
        type: String
    },
    todo_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Todo', Todo);