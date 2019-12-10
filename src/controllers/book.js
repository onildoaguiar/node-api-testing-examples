'use strict'

const book = require('../models/book')
 
module.exports.create = (req, res) =>
    book.create(req.body, (err, doc) => {
        if (err || doc === null) {
          return res.status(400).send({ message: err })
        }
        res.send(doc)
      })

module.exports.byId = (req, res) =>
    book.findOne({ _id: req.params.id, active: true }, (err, doc) => {
      if (err || doc === null) {
        return res.status(404).send({ message: 'Book not found' })
      }
      res.send(doc)
    })

module.exports.update = (req, res) =>
    book.findOneAndUpdate({ _id: req.params.id, active: true }, req.body, { new: true }, (err, doc) => {
      if (err || doc === null) {
        return res.status(500).send({ message: 'Error while updating' })
      }
      res.send(doc)
    })

module.exports.delete = (req, res) =>
    book.deleteOne({ _id: req.params.id}, err => {
      if (err) {
        return res.status(500).send({ message: 'Error while deleting' })
      }
      res.send({ message: `Book id: ${req.params.id} was deleted` })
    })