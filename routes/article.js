const express = require("express");
const router = express.Router();
const articleController = require("../controllers/article");

router.get("/", articleController.index);

//I want full CRUD on this....
// "/article" --> lists everything GET
// "/article/new"--> new article form  GET
// "/article"--> creates new article in database POST
// "/article/1"-->show article 1 GET
// "/article/1/edit"-->edit article 1 GET
// "/article/1"-->delete article 1 DELETE
//friendly reminder that everything on this page is in fact /article
module.exports = router;
