const router = require('express').Router()
const Author = require('../models/Author')

router.get('/create',(req,res)=>{
    res.render('author-create.ejs')
})


router.post('/create', async(req,res)=>{
    const createdAuthor = await Author.create(req.body)
    res.redirect('/authors/create')
})


module.exports = router