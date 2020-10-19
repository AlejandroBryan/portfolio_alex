const express = require('express'),
      router = express.Router()


      router.get('/', (req, res)=>{
          res.render('portfolio/landing')
      })
  
      router.get('/about', (req, res)=>{
        res.render('portfolio/home')
    })


     














      module.exports = router