'use strict'

const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const bookModel = new Schema({
    title: {
        type: String,
        required: true
    }
})

module.exports = Mongoose.model('Book', bookModel)
