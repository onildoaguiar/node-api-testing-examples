'use strict'

const express = require('express')
const bearer = require('express-authorization-bearer')
const auth = require('../auth')
const controller = require('../controllers/user')

const BASE_URL = '/api/v1/user'

module.exports = express.Router()
  .post(`${BASE_URL}/signUp`, controller.signUp)
  .post(`${BASE_URL}/signIn`, controller.signIn)
  .get(`${BASE_URL}/:id`, bearer, auth, controller.byId)
  .put(`${BASE_URL}/:id`, bearer, auth, controller.update)
  .delete(`${BASE_URL}/:id`, bearer, auth ,controller.delete)
