'use strict'

const Server = require('./src/server')
const Database = require('./src/config/database')
const Config = require('./src/config/env')

Database
  .connect()
  .then(() => {
    console.log('Connected to MongoDB')
    Server().listen(Config.server.port, () =>
      console.log(`Server running on port ${Config.server.port}`))
  })
  .catch(err => {
    console.log(err)
    process.exit(1)
  })
