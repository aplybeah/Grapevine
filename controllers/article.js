module.exports = {
  index: function(req, res) {
    res.send("index");
  },
  new: function(req, res) {
    res.send("new");
  },
  create: function(req, res) {
    res.redirect("/");
  },
  show: function(req, res) {
    res.send(`welcome to ${req.params.id}`);
  },
  edit: function(req, res) {
    res.send(`edit ${req.params.id}`);
  },
  update: function(req, res) {
    res.redirect("/");
  },
  delete: function(req, res) {
    res.redirect("/");
  }
};
