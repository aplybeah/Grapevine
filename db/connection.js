const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/grapevine");
mongoose.Promise = Promise;

module.exports = mongoose;
