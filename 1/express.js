// express framework for nodejs
// express ka use => routing
//routing => 
//  https:// www.facebook.com/profile
// "/profile" is route
// "/contact" => contact dikhe
// "/like" => like kr pae etc.
// types of route => GET & POST ye dono main h

const express = require('express')
const app = express()
app.use(function(req,res,next){
    console.log("hello from middleware")
    next();
})
app.get('/', function (req, res) {
  res.send('Hello World12')
})

app.get('/profile', function (req, res) {
    res.send('Hello World from profile')
  })

app.listen(3000)