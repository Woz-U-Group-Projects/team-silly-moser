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

router.get("/api/users", function(req, res, next) {
  UserModel.findAll().then(users => res.json(users));
});


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

//router.delete('./users/:id', (req, res, next) => {
 // let userId = req.params.id;
 // UserModel.users.destroy({
  //  where: {user_id: actorId}
 // }).then(result => res.redirect('/')).catch(err =>{
  //  res.status(400);
  //  res.send('Issue please try again');
 // })
//})
router.delete("/:id", function(req, res, next) {
  if (req.user && req.user.Admin) {
    let userId = parseInt(req.params.id);
    models.users
      .update({ Deleted: true }, { where: { UserId: userId } })
      .then(result => res.redirect("/users"))
      .catch(error => {
        res.status(400);
        res.send("error deleting user");
      });
  } else {
    res.redirect("unauthorized");
  }
});
module.exports = router;
