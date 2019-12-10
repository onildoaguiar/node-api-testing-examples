'use strict'

const supertest = require('supertest')
const server = require('../../server')
const mongoose = require('mongoose')
const config = require('../../config/env')
const fixtures = require('../__fixtures__')

describe('User Authentication', () => {
  let request

  async function removeAllCollections() {
    const collections = Object.keys(mongoose.connection.collections)
    for (const collectionName of collections) {
      const collection = mongoose.connection.collections[collectionName]
      await collection.deleteMany()
    }
  }

  beforeAll(async () => {
    await mongoose.connect(config.db.url)
    request = supertest(await server())
  })

  afterEach(async () => {
    await removeAllCollections()
  })


  it('Should return "400" for an unsuccessful login', async () => {
    await request
      .post('/api/v1/user/signIn')
      .send({ email: fixtures.user.email, wrongPassword: fixtures.user.wrongPassword })
      .expect(400)
  })
})