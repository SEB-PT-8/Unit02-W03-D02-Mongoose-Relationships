const Author = require('../models/Author')

const router = require('express').Router()


router.get('/create', async(req,res)=>{
    const allAuthors = await Author.find()
    res.render('create-book.ejs',{allAuthors:allAuthors})
})


module.exports = router