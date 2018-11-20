const { send } = require("micro");
const { router, get } = require("micro-fork");

var mongoose = require("mongoose");
var controller = require("../controller");

mongoose.connect(
  "mongodb://general:good-food-guide1234@ds029605.mlab.com:29605/good-food-guide"
);

function finished() {
  console.log("------------request-finished");
}

const statusCode = 200;

const getAllDisease = async (req, res) => {
  var promise = controller.getAllDiseases();
  promise
    .then(function(docs) {
      if (docs.length == 0) send(res, statusCode, { error: "No record found" });
      else send(res, statusCode, docs);
    })
    .catch(function(err) {
      send(res, statusCode, err);
    })
    .then(finished)
    .catch(function(err) {
      console.log(err);
    });
};

const getDisease = async (req, res) => {
  var promise = controller.getDisease(req.query.searchKey);
  promise
    .then(function(docs) {
      if (docs.length == 0) send(res, statusCode, { error: "No record found" });
      else send(res, statusCode, docs);
    })
    .catch(function(err) {
      send(res, statusCode, err);
    })
    .then(finished)
    .catch(function(err) {
      console.log(err);
    });
};

const notfound = (req, res) => send(res, 404, { error: "Invalid route" });

module.exports = router()(
  get("/*", getAllDisease),
  get("/getDisease", getDisease)
);
