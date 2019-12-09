'use strict'

const Express = require('express')
const Bearer = require('express-authorization-bearer')
const Auth = require('../auth')
const Controller = require('../controllers/book')

const BASE_URL = '/api/v1/book'

module.exports = Express.Router()
  .post(`${BASE_URL}/create`, Controller.create)
  .get(`${BASE_URL}/:id`, Bearer, Auth, Controller.byId)
  .put(`${BASE_URL}/:id`, Bearer, Auth, Controller.update)
  .delete(`${BASE_URL}/:id`, Bearer, Auth ,Controller.delete)
