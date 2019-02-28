const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: String,
  content: String,
  comment: { type: Schema.Types.String, ref: "Comment" },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = articleSchema;
