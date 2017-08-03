var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/:person_id/tasks/create', function (req, res) {
  models.Task.create({
    task: req.body.task,
    person_id: req.params.person_id
  }).then(function() {
    res.redirect('/');
  });
});

router.post('/person_id/tasks/destroy', function (req, res) {
  models.Task.destroy({
    task: req.body.task
  }).then(function() {
    res.redirect('/');
  });
});

module.exports = router;
