const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  comment: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }
});

module.exports = articleSchema;
