const { send } = require("micro");
const { router, get } = require("micro-fork");

var mongoose = require("mongoose");
var dao = require("../dao");

mongoose.connect(
  "mongodb://general:good-food-guide1234@ds029605.mlab.com:29605/good-food-guide"
);

function finished() {
  console.log("------------request-finished------------");
}

const statusCode = 200;

const getDisease = async (req, res) => {
  var promise = dao.getDisease(req.query.searchKey);
  promise
    .then(function(docs) {
      if (docs.length == 0) send(res, statusCode, { error: "No record found" });
      else send(res, statusCode, docs);
    })
    .catch(function(err) {
      send(res, statusCode, err);
    })
    .then(finished);
};

module.exports = router()(get("/*", getDisease));
