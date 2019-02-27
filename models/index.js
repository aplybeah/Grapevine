const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

module.exports = {
  Article: mongoose.model("Article", require("./article")),
  Comment: mongoose.model("Comment", require("./comment"))
};
