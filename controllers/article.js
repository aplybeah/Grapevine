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
    res.render("article/show");
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
