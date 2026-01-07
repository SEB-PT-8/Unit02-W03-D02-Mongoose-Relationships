const router = require('express').Router()
const Author = require('../models/Author')

router.get('/create',(req,res)=>{
    res.render('author-create.ejs')
})



module.exports = router