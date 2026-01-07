const router = require('express').Router()


router.get('/create',(req,res)=>{
    res.render('author-create.ejs')
})



module.exports = router