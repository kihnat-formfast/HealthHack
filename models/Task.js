var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  Id: Number,
  Name: String,
  Stat: String,
  Module: Number,
});
module.exports = mongoose.model('Task', TaskSchema);
