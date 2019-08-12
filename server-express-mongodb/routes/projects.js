var express = require("express");
var router = express.Router();
var ProjectModel = require("../models/project");

router.get("/", function(req, res, next) {
  ProjectModel.find().then(projects => res.json(projects));
});

router.post("/", function(req, res, next) {
  let newProject = new ProjectModel();
  newProject.name = req.body.name;
  newProject.createdBy = req.body.createdBy;
  newProject.save().then(project => res.json(project));
});

router.delete("/:id", function(req, res, next) {
  ProjectModel.findByIdAndRemove(req.params.id, (err, project) => {
    if (err) return res.status(400).send(err);
    res.send(project);
  });
});

router.put("/:id", function(req, res, next) {
  ProjectModel.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      createdBy: req.body.createdBy
    },
    { new: true },
    (err, project) => {
      if (err) return res.status(400).send(err);
      res.send(project);
    }
  );
});

module.exports = router;
