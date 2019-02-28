const { Article } = require("../models/index");
const { Comment } = require("../models/index");
module.exports = {
  new: function(req, res) {
    res.render("article/new");
  },
  create: function(req, res) {
    const { title, content } = req.body;
    Article.create({
      title,
      content
    }).then(article => {
      res.redirect(`/article/${article._id}`);
    });
  },
  show: function(req, res) {
    Article.findById(req.params.id).then(article => {
      res.render("article/show", { article });
    });
  },
  edit: function(req, res) {
    Article.findById(req.params.id).then(article => {
      res.render("article/edit", { article });
    });
  },
  update: function(req, res) {
    const { title, content, comment } = req.body;
    Article.findByIdAndUpdate(req.params.id, {
      title,
      content,
      comment
    }).then(article => {
      // Comment.content.push({ content });
      res.redirect(`/article/${article._id}`);
    });
  },
  delete: function(req, res) {
    Article.remove({ _id: req.params.id }).then(article => {
      res.redirect("/");
    });
  }
};
