const express = require("express");
const router = express.Router();
const passport = require("passport");

const Project = require("../models/project");
const Users = require("../models/Users");

// @route GET api/projects/:id
// @desc Get specific project by id
// @access Private

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let id = req.params.id;

    Project.findById(id).then(project => res.json(project));
  }
);

// @route POST api/projects/create
// @desc Create a new project
// @access Private
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.user.id);
    Users.findOne({ _id: req.user.id }).then(foundUser => {
      if (foundUser) {
        console.log(foundUser);
        // foundUser is user object
        // read the UserProjects, filter out the one to be updated, update it, and re-add it
        foundUser.UserProjects = [
          ...foundUser.UserProjects,
          { name: req.body.projectName, teamMembers: req.body.members }
        ];
        foundUser.save().then(result => res.json(result));
      } else {
        res.json({ message: "Error" });
      }
    });
  }
);

/// LEIF AMMON

router.get(
  "/projectList/list",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.user.id);
    Users.findOne({ _id: req.user.id }).then(foundUser => {
      if (foundUser) {
        console.log(foundUser);
        // foundUser is user object
        // read the UserProjects, filter out the one to be updated, update it, and re-add it
        res.json(foundUser.UserProjects);
      } else {
        res.json({ message: "Error" });
      }
    });
  }
);

// @route PATCH api/projects/update
// @desc Update an existing project
// @access Private

router.patch(
  "/update",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let projectFields = {};

    projectFields.name = req.body.projectName;
    projectFields.teamMembers = req.body.members;

    Project.findOneAndUpdate(
      { _id: req.body.id },
      { $set: projectFields },
      { new: true }
    )
      .then(project => {
        res.json(project);
      })
      .catch(err => console.log(err));
  }
);

// @route DELETE api/projects/delete/:id
// @desc Delete an existing project
// @access Private
router.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Project.findById(req.params.id).then(project => {
      project.remove().then(() => res.json({ success: true }));
    });
  }
);

module.exports = router;
