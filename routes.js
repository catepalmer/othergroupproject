const express = require('express')
const fileFun = require('./fileFun')
const router = express.Router()

let score = {
  anton: 0,
  brad: 0,
  cate: 0,
  rebecca: 0,
  ross: 0
}

router.get('/', (req, res) => {
  res.redirect('/home')
})

router.get('/home', (req, res) => {
  //make questions = questions.json
  res.render('home')
})

router.get('/quiz', (req, res) => {
  // question = next question from array
  res.render('quiz', question)
})

router.get('/profile', (req, res) => {
  //get profiles from profiles.json
  //winner = profile from the highest score
  res.render('profile', winner)
})

router.post('/home', (req, res) => {
  res.redirect('quiz')
})

router.post('/quiz', (req, res) => {
  //if all questions answered
  res.redirect('profile')
  //else
  // add answer to score
  res.redirect('quiz')

})

module.exports = router
