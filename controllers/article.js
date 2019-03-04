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
    const { title, content } = req.body;
    Article.findByIdAndUpdate(req.params.id, {
      $set: {
        title,
        content
      }
    }).then(article => {
      res.redirect(`/article/${article._id}`);
    });
  },
  addComment: function(req, res) {
    console.log("making a new comment!");
    console.log(req.body);
    const { comment } = req.body;
    Article.findByIdAndUpdate(req.params.id, { comment }).then(article =>
      res.redirect({ comment }, `article/${article._id}/comment`)
    );
  },

  delete: function(req, res) {
    Article.remove({ _id: req.params.id }).then(article => {
      res.redirect("/");
    });
  }
};
