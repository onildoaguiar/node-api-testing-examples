'use strict'

const Mongoose = require('mongoose')
const Config = require('./env')
Mongoose.Promise = Promise

module.exports.connect = () => Mongoose.connect(Config.db.url)
