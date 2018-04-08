var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Module = require('../models/Module.js');

/* GET ALL ModuleS */
router.get('/', function(req, res, next) {
  Module.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Module BY ID */
router.get('/:id', function(req, res, next) {
  Module.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE Module */
router.post('/', function(req, res, next) {
  Module.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Module */
router.put('/:id', function(req, res, next) {
  Module.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Module */
router.delete('/:id', function(req, res, next) {
  Module.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
