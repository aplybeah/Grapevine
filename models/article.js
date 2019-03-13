const mongoose = require("mongoose");
const Comment = require("./index");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  content: String,
  comments: [Comment],
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = articleSchema;
