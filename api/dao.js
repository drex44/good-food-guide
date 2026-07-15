const models = require("./models");

function getAllDiseases() {
  return models.Disease.find({ valid: true }).exec();
}

function getDisease(searchKey) {
  return models.Disease.find({ valid: true, searchKey: searchKey }).exec();
}

function saveNewDisease(newDisease) {
  var disease = new models.Disease(newDisease);
  return disease.save();
}

module.exports = {
  saveNewDisease: saveNewDisease,
  getAllDiseases: getAllDiseases,
  getDisease: getDisease
};
