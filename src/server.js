'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const user = require('./routes/book')
const book = require('./routes/user')

const Server = express()

module.exports = () =>
  Server
    .use(bodyParser.json())
    .use('/', user)
    .use('/', book)

