var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");
const passport = require("passport");
const displayRoutes = require("express-routemap");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/api/users");
var projectsRouter = require("./routes/projects");
let Todo = require('./models/todo');

var app = express();
const todoRoutes = express.Router();

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/projects", projectsRouter);
app.use('/todos', todoRoutes);






var mongoDB =
  "mongodb+srv://dbuser:dbuser@mycluster-erllz.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("connected", () => console.log(`Mongoose connection open to ${mongoDB}`));
db.on("disconnected", () => console.log("Mongoose connection disconnected"));
db.on("error", console.error.bind(console, "Mongoose connection error:"));

console.log("serving on port 3001 -Leif");
displayRoutes(app);

//

todoRoutes.route('/').get(function(req, res) {
  Todo.find(function(err, todos) {
      if (err) {
          console.log(err);
      } else {
          res.json(todos);
      }
  });
});

todoRoutes.route('/:id').get(function(req, res) {
  let id = req.params.id;
  Todo.findById(id, function(err, todo) {
      res.json(todo);
  });
});

todoRoutes.route('/add').post(function(req, res) {
  let todo = new Todo(req.body);
  todo.save()
      .then(todo => {
          res.status(200).json({'todo': 'todo added successfully'});
      })
      .catch(err => {
          res.status(400).send('adding new todo failed');
      });
});

todoRoutes.route('/update/:id').post(function(req, res) {
  Todo.findById(req.params.id, function(err, todo) {
      if (!todo)
          res.status(404).send('data is not found');
      else
          todo.todo_description = req.body.todo_description;
          todo.todo_responsible = req.body.todo_responsible;
          todo.todo_priority = req.body.todo_priority;
          todo.todo_completed = req.body.todo_completed;

          todo.save().then(todo => {
              res.json('Todo updated');
          })
          .catch(err => {
              res.status(400).send("Update not possible");
          });
  });
});

app.use('/todos', todoRoutes);

//



module.exports = app;
