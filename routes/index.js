const express = require("express");
const router = express.Router();
const { Article } = require("../models/index");
const { Comment } = require("../models/index");

router.get("/", function(req, res) {
  Article.find({}).then(articles => {
    console.log("hit");
    res.render("index", { articles });
  });
});
router.use("/article", require("./article.js"));
module.exports = router;
