var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  id: Number,
  name: String,
});

module.exports = mongoose.model('Task', TaskSchema);