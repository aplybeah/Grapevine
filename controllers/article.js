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
    const createComment = {
      content: req.body.content
    };
    Article.findOneAndUpdate(
      { _id: req.params.id },
      {
        $push: { comments: createComment }
      }
    ).then(article => res.redirect(`/article/${article._id}`));
  },
  //createMeet: function(req, res) {
  //   const createMeet = {
  //     name: req.body.name,
  //     description: req.body.description,
  //     location: req.body.location,
  //     time: req.body.time,
  //     date: req.body.date
  //   };
  //   Community.findOneAndUpdate(
  //     { _id: req.params.id },
  //     { $push: { meets: createMeet } }
  //   ).then(community => {
  //     res.redirect(`/community/${community._id}`);
  //   });
  // }
  delete: function(req, res) {
    Article.remove({ _id: req.params.id }).then(article => {
      res.redirect("/");
    });
  }
};
