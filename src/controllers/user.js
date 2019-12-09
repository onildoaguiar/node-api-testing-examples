'use strict'

const Sha256 = require('crypto-js/sha256')
const Jwt = require('jsonwebtoken')
const User = require('../models/user')
const Config = require('../config/env')
 
module.exports.signUp = (req, res) =>
  createUser(req)
    .save()
    .then(user => res.send(user))
    .catch(err => res.status(400).send({ message: err }))

module.exports.signIn = (req, res) =>
  User.findOne({ email: req.body.email, password: Sha256(req.body.password).toString(), active: true }, (err, doc) => {
    if (err || doc === null) {
      return res.status(400).send({ message: 'User not found' })
    }
    Jwt.sign(doc.toJSON(), Config.token.secret, { expiresIn: '30m' }, (err, token) => {
      if (err) {
        return res.status(500).send({ message: 'Error while generating token' })
      }
      res.send({ token })
    })
  })

module.exports.byId = (req, res) =>
    User.findOne({ _id: req.params.id, active: true }, (err, doc) => {
      if (err || doc === null) {
        return res.status(404).send({ message: 'User not found' })
      }
      res.send(doc)
    })

module.exports.update = (req, res) =>
    User.findOneAndUpdate({ _id: req.params.id, active: true }, req.body, { new: true }, (err, doc) => {
      if (err || doc === null) {
        return res.status(500).send({ message: 'Error while updating' })
      }
      res.send(doc)
    })

module.exports.delete = (req, res) =>
    User.findOneAndUpdate({ _id: req.params.id, active: true }, { active: false }, err => {
      if (err) {
        return res.status(500).send({ message: 'Error while deleting' })
      }
      res.send({ message: `User id: ${req.params.id} was deleted` })
    })

const createUser = req => {
  const user = new User(req.body)
  user.password = Sha256(req.body.password)
  return user
}
