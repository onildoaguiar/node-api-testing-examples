'use strict'

const joi = require('joi')
const joiAssert = require('joi-assert')
const supertest = require('supertest')
const server = require('../../server')
const mongoose = require('mongoose')
const config = require('../../config/env')
const fixtures = require('../__fixtures__')

describe('Contracts Tests: User', () => {
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

    describe('POST /api/v1/user/signUp', () => {
        it('should validate a signUp schema', done => {
            request
                .post('/api/v1/user/signUp')
                .send({
                    email: fixtures.user.email,
                    password: fixtures.user.password,
                    username: 'onildoaguiar',
                    name: 'Onildo Aguiar'
                })
                .expect(200)
                .end((err, res) => {
                    joiAssert(res.body, joi.object().keys({
                        name: joi.string(),
                        permission: joi.string(),
                        _id: joi.string(),
                        email: joi.string(),
                        password: joi.string(),
                        username: joi.string(),
                        creationDate: joi.date(),
                        updateDate: joi.date(),
                        lastedLogin: joi.date(),
                        __v: joi.number()
                    }))
                    done(err)
                })
        })
    })
})