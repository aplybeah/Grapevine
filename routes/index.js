const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.render("index");
});
router.use("/article", require("./article.js"));
module.exports = router;
