var Book = require('../models/Book');

module.exports = {

  create: function(req, res) {
    Book.create(req.body, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  read: function(req, res) {
    Book.find()
        .sort('title')
        .populate({
            path: 'author',
            select: 'name country degree birth_year'
        })
        .select('name degree')
        .exec(function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  show: function(req, res) {
    Book.findById(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  update: function(req, res) {
    Book.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  },

  destroy: function(req, res) {
    Book.findByIdAndRemove(req.params.id, function(err, result) {
      if (err) return res.status(500).send(err);
      res.json(result);
    });
  }

};
