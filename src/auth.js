'use strict'

const Jwt = require('jsonwebtoken')
const Config = require('../config/env')
const TokenExpiredError = Jwt.TokenExpiredError
const JsonWebTokenError = Jwt.JsonWebTokenError

module.exports = (req, res, next) => {
        Jwt.verify(req.token, Config.token.secret, err => {
        if (err instanceof TokenExpiredError || err instanceof JsonWebTokenError ) {
          return res.status(401).send({ message: err.message })
        }

        next()
      })
}