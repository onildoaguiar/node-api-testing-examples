'use strict'

const sha256 = require('crypto-js/sha256')
const jwt = require('jsonwebtoken')
const user = require('../models/user')
const config = require('../config/env')

module.exports.signUp = (req, res) =>
  user.create(req.body, (err, doc) => {
    if (err || doc === null) {
      return res.status(400).send({ message: err })
    }
    res.send(doc)
  })

module.exports.signIn = (req, res) =>
  user.findOne({ email: req.body.email, password: sha256(req.body.password).toString()}, (err, doc) => {
    if (err || doc === null) {
      return res.status(400).send({ message: 'User not found' })
    }
    jwt.sign(doc.toJSON(), config.token.secret, { expiresIn: '30m' }, (err, token) => {
      if (err) {
        return res.status(500).send({ message: 'Error while generating token' })
      }
      res.send({ token })
    })
  })

module.exports.byId = (req, res) =>
  user.findOne({ _id: req.params.id}, (err, doc) => {
    if (err || doc === null) {
      return res.status(404).send({ message: 'User not found' })
    }
    res.send(doc)
  })

module.exports.update = (req, res) =>
  user.findOneAndUpdate({ _id: req.params.id}, req.body, { new: true }, (err, doc) => {
    if (err || doc === null) {
      return res.status(500).send({ message: 'Error while updating' })
    }
    res.send(doc)
  })

module.exports.delete = (req, res) =>
  user.deleteOne({ _id: req.params.id }, err => {
    if (err) {
      return res.status(500).send({ message: 'Error while deleting' })
    }
    res.send({ message: `User id: ${req.params.id} was deleted` })
  })

