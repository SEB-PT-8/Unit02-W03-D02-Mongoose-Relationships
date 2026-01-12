const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
    content: String,
    rating: {
        type: Number,
        min:0,
        max:5
    }
})

const bookSchema = new mongoose.Schema({
    title: String,
    price: Number,
    author:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }],
    reviews: [ratingSchema]
})

const Book = mongoose.model('Book',bookSchema)

module.exports = Book