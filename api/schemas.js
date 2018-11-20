const mongoose = require("mongoose");

var food = {
  name: String,
  desc: String
};

var diseaseSchema = new mongoose.Schema({
  searchKey: String,
  sick: String,
  image: String,
  goodFoods: {
    vegan: [food],
    nonVegan: [food]
  },
  valid: Boolean
});

module.exports = {
  diseaseSchema: diseaseSchema
};
