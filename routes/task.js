var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Task = require('../models/Task.js');

/* GET ALL TaskS */
router.get('/', function(req, res, next) {
  Task.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});
/* GET 6 tasks */
router.get('/top/', function(req, res, next) {
  resp = any;
  Task.findById(1, function (err, post) {
    if (err) return next(err);
    resp.push(post);
  });
  res.json(resppost);
});

/* GET SINGLE Task BY ID */
router.get('/:id', function(req, res, next) {
  Task.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Task */
router.post('/', function(req, res, next) {
  Task.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Task */
router.put('/:id', function(req, res, next) {
  Task.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Task */
router.delete('/:id', function(req, res, next) {
  Task.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
