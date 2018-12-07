const mongoose = require("mongoose");

var food = {
  name: String,
  desc: String
};

var symptoms = {
  description: String,
  symptoms: [String]
};

var diseaseSchema = new mongoose.Schema({
  searchKey: String,
  name: String,
  description: String,
  symptoms: [symptoms],
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
