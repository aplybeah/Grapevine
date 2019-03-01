const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/grapevine");
mongoose.Promise = Promise;

if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.DB_URL);
} else {
  mongoose.connect("mongodb://localhost/todo");
}
module.exports = mongoose;
