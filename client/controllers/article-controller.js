var Article = require("../models/article");

module.exports = {
  find: function(req, res) {
    Article.find().then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  insert: function(req, res) {
    Article.create(req.body).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  },
  delete: function(req, res) {
    Article.remove({
      _id: req.params.id
    }).then(function(doc) {
      res.json(doc);
    }).catch(function(err) {
      res.json(err);
    });
  }
};
