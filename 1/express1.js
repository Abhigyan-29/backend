//express use

const { error } = require('console');
const express = require('express')
const app = express()


app.use(function (req, res, next) {
    next()
});

app.set("view engine", "ejs")
app.use(express.static('./public'))

app.get('/', function (req, res) {
    res.render("index", { age: 12 })
})



app.get('/profile/:username', function (req, res) {
    res.render(`hey from ${req.params.username}`)
})

app.get('/contact', function (req, res) {
    res.render("contact", { name: "harsh" })
})


app.get('/error', function (req, res,next) {
   throw Error ("Something Went Wrong")
})


app.use(function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
  })

app.listen(3001)