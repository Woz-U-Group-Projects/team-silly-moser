// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;


var express = require("express");
var router = express.Router();
var UserModel = require("../models/Users");

router.get("/", function(req, res, next) {
  UserModel.find().then(users => res.json(users));
});


router.get(
  "/api/users",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.user.id);
    UserModel.findAll().then(foundUsers => {
      if (foundUsers) {
        console.log(foundUsers);
        // foundUser is user object
        // read the UserProjects, filter out the one to be updated, update it, and re-add it
        res.json(foundUsers.name);
      } else {
        res.json({ message: "Error" });
      }
    });
  }
);

router.post("/", function(req, res, next) {
  let newUser = new UserModel();
  newUser.name = req.body.name;
  newUser.password = req.body.password;
  newUser.save().then(user => res.json(user));
});

router.delete("/:id", function(req, res, next) {
  UserModel.findByIdAndRemove(req.params.id, (err, user) => {
    if (err) return res.status(400).send(err);
    res.send(user);
  });
});

// router.get("/api/users", function(req, res, next) {
//   UserModel.findAll().then(users => res.json(users));
// });


router.put("/:id", function(req, res, next) {
  UserModel.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      password: req.body.password
    },
    { new: true },
    (err, user) => {
      if (err) return res.status(400).send(err);
      res.send(user);
    }
  );
});

module.exports = router;
