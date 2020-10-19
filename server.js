const express = require('express'),
      app = express(),
      port = process.env.PORT || 3005,
      portfolio = require('./routes/portfolio')

      //general config 
      app.use(express.static(__dirname + '/public'))
      app.set("view engine", "ejs")




    app.use('/', portfolio)


      app.listen(port,()=>{console.log(`Our server is listening on port: ${port}`)})