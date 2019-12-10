'use strict'

const controller = require('../../../controllers/user')
const user = require('../../../models/user')
//const Fixtures = require('./__fixtures__')

describe('Controllers: User', () => {
    beforeAll(async () => {
        user.findOne = jest.fn().mockReturnValue({ _id: '1', title: 'test1' })
        user.create = jest.fn().mockReturnValue({ _id: '1', title: 'test1' })
        user.deleteOne = jest.fn().mockReturnValue({ message: 'User id: 1 was deleted' })
        user.findOneAndUpdate = jest.fn().mockReturnValue(({ _id: '1', title: 'test1' }))
    })

    it('Create one user: signUp()', async () => {
        expect(controller.signUp({ body: { title: 'test1' } })).toEqual({ _id: '1', title: 'test1' })
    })

    it('Get a token: signIn()', async () => {
        expect(controller.signIn({ body: { title: 'test1' } })).toEqual({ _id: '1', title: 'test1' })
    })

    it('Get one user: byId()', async () => {
        expect(controller.byId({ params: { id: '1' } })).toEqual({ _id: '1', title: 'test1' })
    })

    it('Delete one user: delete()', async () => {
        expect(controller.delete({ params: { id: '1' } })).toEqual({ message: 'User id: 1 was deleted' })
    })

    it('Update one user: update()', async () => {
        expect(controller.update({ params: { id: '1' } })).toEqual({ _id: '1', title: 'test1' })
    })
})
