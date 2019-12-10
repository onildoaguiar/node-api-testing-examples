'use strict'

const express = require('express')
const bearer = require('express-authorization-bearer')
const auth = require('../auth')
const controller = require('../controllers/book')

const BASE_URL = '/api/v1/book'

module.exports = express.Router()
  .post(`${BASE_URL}/create`, controller.create)
  .get(`${BASE_URL}/:id`, bearer, auth, controller.byId)
  .put(`${BASE_URL}/:id`, bearer, auth, controller.update)
  .delete(`${BASE_URL}/:id`, bearer, auth ,controller.delete)
