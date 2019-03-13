const express = require("express");
const router = express.Router();
const articleController = require("../controllers/article");

router.get("/new", articleController.new);
router.post("/", articleController.create);
router.get("/:id", articleController.show);
router.get("/:id/edit", articleController.edit);
router.put("/:id", articleController.update);
router.put("/:id/comments", articleController.addComment);
router.delete("/:id", articleController.delete);

module.exports = router;
