const models = require("./models");

function throw_promise_error(error) {
  return new Promise(function(resolve, reject) {
    reject(error);
  });
}

function getAllDiseases() {
  return new Promise(function(resolve, reject) {
    var query = models.Disease.find({ valid: true });
    query.exec(function(err, docs) {
      if (err) reject(err);
      else resolve(docs);
    });
  });
}

function getDisease(searchKey) {
  return new Promise(function(resolve, reject) {
    var query = models.Disease.find({ valid: true, searchKey: searchKey });
    query.exec(function(err, docs) {
      if (err) reject(err);
      else resolve(docs);
    });
  });
}

function saveNewDisease(newDisease) {
  return new Promise(function(resolve, reject) {
    var disease = new models.Disease(newDisease);
    disease.save(function(err, doc) {
      if (err) reject(err);
      else resolve(doc);
    });
  });
}

module.exports = {
  throw_promise_error: throw_promise_error,
  saveNewDisease: saveNewDisease,
  getAllDiseases: getAllDiseases,
  getDisease: getDisease
};
