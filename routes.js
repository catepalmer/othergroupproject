const express = require('express')
const router = express.Router()
const db = require('./db')

router.get('/', (req, res) => {
  res.redirect('home')
})

router.get('/home', (req, res) => {
  res.render('home')
})

router.get('/quiz/:id', (req, res) => {
  db.getQuestion(req.params.id)
    .then((data) => {
      res.render('quiz', data)
    })
})







module.exports = router
