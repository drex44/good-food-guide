const mongoose = require("mongoose");
const schemas = require("./schemas");

var Disease = mongoose.model("Disease", schemas.diseaseSchema);

module.exports = {
  Disease: Disease
};
