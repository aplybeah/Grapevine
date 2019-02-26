const Article = require("../models/index");
module.exports = {
  //   index: function(req, res) {
  //     res.render(article/index);
  //   },
  new: function(req, res) {
    res.render("article/new");
  },
  create: function(req, res) {
    res.redirect("/");
  },
  show: function(req, res) {
    // res.render("article/show");
    Article.findById(req.params.id).then(article => {
      res.render("article/show", { article });
    });
  },
  edit: function(req, res) {
    res.render("article/edit");
  },
  update: function(req, res) {
    res.redirect("/");
  },
  delete: function(req, res) {
    res.redirect("/");
  }
};
