var express = require("express");
var exphbs  = require('express-handlebars');
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
// var cors = require("cors");
var mongoose = require("mongoose");
const passport = require("passport");

// const userSchema = require('./models/userSchemaOG')
// const User = mongoose.model('user', userSchema, 'user')

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/api/users");
var projectsRouter = require("./routes/projects");

var app = express();


// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// hbs view engine setup

app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use(cors());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/projects", projectsRouter);

app._router.stack.forEach(r => {if(r.route && r.route.path) {console.log(r.route.path)} });

var mongoDB =
  "mongodb+srv://dbuser:dbuser@mycluster-erllz.mongodb.net/test?retryWrites=true&w=majority";
  // "mongodb+srv://ammon:Password1%21@cluster0-lhvh5.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("connected", () => console.log(`Mongoose connection open to ${mongoDB}`));
db.on("disconnected", () => console.log("Mongoose connection disconnected"));
db.on("error", console.error.bind(console, "Mongoose connection error:"));
console.log('serving on port 3001 -Leif');

module.exports = app;
