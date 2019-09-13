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

var app = express();

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

module.exports = app;
