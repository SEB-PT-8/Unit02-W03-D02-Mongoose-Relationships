const Author = require('../models/Author')
const Book = require('../models/Book')

const router = require('express').Router()


router.get('/create', async(req,res)=>{
    const allAuthors = await Author.find()
    res.render('create-book.ejs',{allAuthors:allAuthors})
})

router.post('/create', async (req,res)=>{
    const createdBook = await Book.create(req.body)
    res.redirect('/books/create')
})


module.exports = router