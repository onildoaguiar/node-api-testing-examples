'use strict'

const Supertest = require('supertest')
const Server = require('../../server')
const Database = require('../../config/database')
const Fixtures = require('./__fixtures__')

describe('User Authentication', () => {
  let request

  beforeAll(async () => {
    await Database.connect()
    const server = await Server()
    request = Supertest(server)
  })

  it('Should return "200" for a successful login', async () => {
    await request
      .post('/api/v1/user/signIn')
      .send({ email: Fixtures.user.email, password: Fixtures.user.password })
      .expect(200)
  })

  it('Should return "400" for an unsuccessful login', async () => {
    await request
      .post('/api/v1/user/signIn')
      .send({ email: Fixtures.user.email, wrongPassword: Fixtures.user.wrongPassword })
      .expect(400)
  })
})
