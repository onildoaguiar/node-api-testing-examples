'use strict'

const controller = require('../../../controllers/book')
const book = require('../../../models/book')
//const Fixtures = require('./__fixtures__')

describe('Controllers: Book', () => {
    beforeAll(async () => {
        book.findOne = jest.fn().mockReturnValue(({ _id: '1', title: 'test1' }))
        book.create = jest.fn().mockReturnValue(({ _id: '1', title: 'test1' }))
        book.deleteOne = jest.fn().mockReturnValue({ message: 'Book id: 1 was deleted' })
        book.findOneAndUpdate = jest.fn().mockReturnValue(({ _id: '1', title: 'test1' }))
    })

    it('Create one book: create()', async () => {
        expect(controller.create({ body: { title: 'test1' } })).toEqual({ _id: '1', title: 'test1' })
    })

    it('Get one book: byId()', async () => {
        expect(controller.byId({ params: { id: '1' } })).toEqual({ _id: '1', title: 'test1' })
    })

    it('Delete one book: delete()', async () => {
        expect(controller.delete({ params: { id: '1' } })).toEqual({ message: 'Book id: 1 was deleted' })
    })

    it('Update one book: update()', async () => {
        expect(controller.update({ params: { id: '1' } })).toEqual({ _id: '1', title: 'test1' })
    })
})
