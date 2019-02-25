const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model("Article", articleSchema);
