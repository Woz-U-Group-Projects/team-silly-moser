// var express = require("express");
// var router = express.Router();
// var ProjectModel = require("../models/project");

// const express = require("express");
// const router = express.Router();
// const passport = require("passport");

// const Project = require("../../models/Project");

// router.get("/", function(req, res, next) {
//   ProjectModel.find().then(projects => res.json(projects));
// });

// router.post("/", function(req, res, next) {
//   let newProject = new ProjectModel();
//   newProject.name = req.body.name;
//   newProject.createdBy = req.body.createdBy;
//   newProject.save().then(project => res.json(project));
// });

// router.delete("/:id", function(req, res, next) {
//   ProjectModel.findByIdAndRemove(req.params.id, (err, project) => {
//     if (err) return res.status(400).send(err);
//     res.send(project);
//   });
// });

// router.put("/:id", function(req, res, next) {
//   ProjectModel.findByIdAndUpdate(
//     req.params.id,
//     {
//       name: req.body.name,
//       createdBy: req.body.createdBy
//     },
//     { new: true },
//     (err, project) => {
//       if (err) return res.status(400).send(err);
//       res.send(project);
//     }
//   );
// });

// module.exports = router;


const express = require("express");
const router = express.Router();
const passport = require("passport");

 const Project = require("../models/project");
const Users = require("../models/Users");

// @route GET api/projects
// @desc Get all projects for a specific user
// @access Private
// router.get(
//   "/",
//   passport.authenticate("jwt", { session: false }),
//   async (req, res) => {


//     let projectsArr = [];

//     // Member projects
//     await Project.find({})
//       .then(projects => {
//         projects.map(project => {
//           project.teamMembers.map(member => {
//             if (member.email == req.user.email) {
//               projectsArr.push(project);
//             }
//           });
//         });
//       })
//       .catch(err => console.log(err));

//     const OWNER = {
//       id: req.user.id,
//       name: req.user.name,
//       email: req.user.email
//     };

//     // Combine with owner projects
//     await Project.find({ owner: OWNER })
//       .then(projects => {
//         let finalArr = [...projects, ...projectsArr];
//         res.json(finalArr);
//       })
//       .catch(err => console.log(err));
//   }
// );

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
    Users.findOne({_id:req.user.id}).then((foundUser) => {
      if(foundUser) {
      console.log(foundUser);
      // foundUser is user object
      // read the UserProjects, filter out the one to be updated, update it, and re-add it
      foundUser.UserProjects = [...foundUser.UserProjects, {name: req.body.projectName, teamMembers: req.body.members }]
      foundUser.save().then(result => res.json(result));
      } else {
        res.json({message:"Error"});
      }
    });
    
  }
  );





    // const OWNER = {
    //   id: req.user.id,
    //   name: req.user.name,
    //   email: req.user.email
    // };

    // const NEW_PROJECT = await new Project({
    //   owner: OWNER,
    //   name: req.body.projectName,
    //   teamMembers: req.body.members
    // });

    // NEW_PROJECT.save().then(project => res.json(project));

/// LEIF AMMON

router.get(
  "/projectList/list",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.user.id);
    Users.findOne({_id:req.user.id}).then((foundUser) => {
      if(foundUser) {
      console.log(foundUser);
      // foundUser is user object
      // read the UserProjects, filter out the one to be updated, update it, and re-add it
      res.json(foundUser.UserProjects );
      } else {
        res.json({message:"Error"});
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
