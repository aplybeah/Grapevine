const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: String
});

const articleSchema = new Schema({
  title: String,
  content: String,
  comment: { commentSchema },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = articleSchema;
