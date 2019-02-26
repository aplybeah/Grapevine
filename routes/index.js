const express = require("express");
const router = express.Router();
const Article = require("../models/index");

router.get("/", function(req, res) {
  // res.render("index");
  console.log(Article);
  Article.find({}).then(articles => {
    console.log("hit");
    res.render("index", { articles });
  });
});
router.use("/article", require("./article.js"));
module.exports = router;
