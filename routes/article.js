const express = require("express");
const router = express.Router();
const articleController = require("../controllers/article");

router.get("/new", articleController.new);
router.post("/", articleController.create);
router.get("/:id", articleController.show);
/** uri: "/:id/add-comment" POST method, new controller method .addComment */
router.post("/:id/add-comment", articleController.addComment);
router.get("/:id/edit", articleController.edit);
router.put("/:id", articleController.update);
router.delete("/:id", articleController.delete);

module.exports = router;
