'use strict'

const mongoose = require('mongoose')
const schema = mongoose.Schema

const bookModel = new schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Book', bookModel)
