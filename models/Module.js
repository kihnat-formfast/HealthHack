var mongoose = require('mongoose');

var ModuleSchema = new mongoose.Schema({
  Id: Number,
  Name: String,
});

module.exports = mongoose.model('Module', ModuleSchema);
