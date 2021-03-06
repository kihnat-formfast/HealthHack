var mongoose = require('mongoose');

var BadgeSchema = new mongoose.Schema({
  Id: Number,
  Name: String,
  BadgeLevel: Number,
  RequiredSkill: String,
  SkillLevel: Number,
  Url: String,
});

module.exports = mongoose.model('badges', BadgeSchema);
