'use strict'

const Dotenv = require('dotenv')

Dotenv.config()

module.exports = {
  server: {
    port: process.env.PORT,
    host: process.env.HOST
  },
  db: {
    url: process.env.DB_URL
  },
  token: {
    secret: process.env.SECRET
  }
}
