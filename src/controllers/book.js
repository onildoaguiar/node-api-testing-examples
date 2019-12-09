'use strict'

const Book = require('../models/book')
 
module.exports.create = (req, res) =>
  createBook(req)
    .save()
    .then(user => res.send(user))
    .catch(err => res.status(400).send({ message: err }))

module.exports.byId = (req, res) =>
    Book.findOne({ _id: req.params.id, active: true }, (err, doc) => {
      if (err || doc === null) {
        return res.status(404).send({ message: 'Book not found' })
      }
      res.send(doc)
    })

module.exports.update = (req, res) =>
    Book.findOneAndUpdate({ _id: req.params.id, active: true }, req.body, { new: true }, (err, doc) => {
      if (err || doc === null) {
        return res.status(500).send({ message: 'Error while updating' })
      }
      res.send(doc)
    })

module.exports.delete = (req, res) =>
    Book.deleteOne({ _id: req.params.id}, err => {
      if (err) {
        return res.status(500).send({ message: 'Error while deleting' })
      }
      res.send({ message: `Book id: ${req.params.id} was deleted` })
    })

const createBook = req => new Book(req.body)
