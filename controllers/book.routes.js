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


router.get('/',async (req,res)=>{
    const allBooks = await Book.find().populate('author')
    console.log(allBooks)
    res.render('book-list.ejs',{allBooks: allBooks})
})

// Exercise 1:
// 1. create a route for /books
// 2. get all the books from the database .find()
// 3. pass it to the ejs page and display the book information on the page
// 4. displya book title and price
// 5. create book-list.ejs page


router.get('/:id',async (req,res)=>{
    const foundBook = await Book.findById(req.params.id)
    console.log(foundBook)
    res.render('book-details.ejs',{foundBook: foundBook})
})

router.post('/:id/reviews',async (req,res)=>{
    console.log(req.body)
    const foundBook = await Book.findById(req.params.id)
    foundBook.reviews.push(req.body)
    console.log(foundBook)
    foundBook.save()
    res.redirect('/books/' + req.params.id)

})

module.exports = router