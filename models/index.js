const mongoose = require("../db/connection");

module.exports = {
  Article: mongoose.model("Article", require("./article")),
  Comment: mongoose.model("Comment", require("./comment"))
};
