'use strict'

const Express = require('express')
const Bearer = require('express-authorization-bearer')
const Auth = require('../auth')
const Controller = require('../controllers/user')

const BASE_URL = '/api/v1/user'

module.exports = Express.Router()
  .post(`${BASE_URL}/signUp`, Controller.signUp)
  .post(`${BASE_URL}/signIn`, Controller.signIn)
  .get(`${BASE_URL}/:id`, Bearer, Auth, Controller.byId)
  .put(`${BASE_URL}/:id`, Bearer, Auth, Controller.update)
  .delete(`${BASE_URL}/:id`, Bearer, Auth ,Controller.delete)
