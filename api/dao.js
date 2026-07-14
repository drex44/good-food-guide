const models = require("./models");

function throw_promise_error(error) {
  return new Promise(function(resolve, reject) {
    reject(error);
  });
}

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
  throw_promise_error: throw_promise_error,
  saveNewDisease: saveNewDisease,
  getAllDiseases: getAllDiseases,
  getDisease: getDisease
};
