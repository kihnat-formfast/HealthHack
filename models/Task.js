var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
  id: Number,
  name: String,
});
//module.exports = [{Name: "Go for a run" }, {Name: "Take a shower"}];
module.exports = mongoose.model('Task', TaskSchema);
