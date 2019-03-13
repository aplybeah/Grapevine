const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});
module.exports = commentSchema;
