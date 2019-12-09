'use strict'

const Express = require('express')
const BodyParser = require('body-parser')
const User = require('./routes/user')
const Book = require('./routes/user')

const Server = Express()

module.exports = () =>
  Server
    .use(BodyParser.json())
    .use('/', User)
    .use('/', Book)

