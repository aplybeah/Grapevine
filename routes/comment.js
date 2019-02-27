const express = require("express");
const router = express.Router();
const commentController = require("../controllers/comment");

router.post("/", commentController.create);
router.get("/new", commentController.new);
router.get("/:id", commentController.show);
router.get("/:id/edit", commentController.edit);
router.put("/:id", commentController.update);
router.delete("/:id", commentController.delete);

module.exports = router;
