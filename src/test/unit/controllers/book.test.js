'use strict'

const Controller = require('../../../controllers/book')
//const Fixtures = require('./__fixtures__')

jest.mock('../../../controllers/book', () => jest.fn( () => ({_id: '1', title: 'test1'})))

describe('User Authentication', () => {
  let request

  beforeAll(async () => {
  })

  it('Should return "200" for a successful login', async () => {
      expect(Controller.create({_id: '1', title: 'test1'})).toBe({_id: '1', title: 'test1'})
  })

  it('Should return "400" for an unsuccessful login', async () => {
  })
})
