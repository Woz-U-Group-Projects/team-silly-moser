const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

const app = express();



// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

//begin import from old server.js

app.get('/api/projects', (req, res) => {
  const projects = [
      {id: 1, projectName: 'Build a MERN stack app', description: 'Project Mgmt'},
      {id: 2, projectName: 'Take a vacation', description: 'Tropical'},
      {id: 3, projectName: 'Build Resume', description: 'Career Services,LinkedIn, GitHub etc.'}
  ];
  
  res.json(projects);

});


// TEST
app.get('/api/users', (req, res,) => {
const users = [
  {id: 1, firstName: 'Red', lastName: 'Skelton'},
  {id: 2, firstName: 'Rip', lastName: 'Torn'},
  {id: 3, firstName: 'Curtis', lastName: 'Mayfield'}
];
res.json(users);


});




// end import from old server.js

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
