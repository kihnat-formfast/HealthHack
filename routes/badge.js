var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Badge = require('../models/Badge.js');

/* GET ALL BadgeS */
router.get('/', function(req, res, next) {
  Badge.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Badge BY ID */
router.get('/:id', function(req, res, next) {
  Badge.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Badge */
router.post('/', function(req, res, next) {
  Badge.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Badge */
router.put('/:id', function(req, res, next) {
  Badge.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Badge */
router.delete('/:id', function(req, res, next) {
  Badge.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
