const express = require('express')
const fileFun = require('./fileFun')
const router = express.Router()

let score = [
  {name: "anton", score: 0},
  {name: "brad", score: 0},
  {name: "cate", score: 0},
  {name: "rebecca", score: 0},
  {name: "ross", score: 0}
]

router.get('/', (req, res) => {
  res.redirect('/home')
})

router.get('/home', (req, res) => {
  //make questions = questions.json
  fileFun.readJSON('./questions.json', obj => {
    questions = obj
    res.render('home')
  })
})

router.get('/quiz', (req, res) => {
  // question = next question from array
  let question = questions.pop()
  res.render('quiz', question)
})

router.get('/profile', (req, res) => {
  //get profiles from profiles.json
  fileFun.readJSON('./profiles.json', obj => {
    //winner = profile from the highest score
    let winner = getWinner(obj, winnerName)
    res.render('profile', winner)    
  })
})

router.post('/home', (req, res) => {
  res.redirect('quiz')
})

router.post('/quiz', (req, res) => {
  let answer = req.body.value.toLowerCase()
  // add answer to score
  addScore(answer)
  //if all questions answered
  if (questions.length < 1){
    res.redirect('profile')
  }
  else {
    res.redirect('quiz')
  }
})

function getWinnerName() {
  score.sort((a, b) => b.score - a.score)
  return score[0].name // = highest value from score
}

function getWinner(profiles) {
  let name = getWinnerName()
  return profiles.find(obj => obj.name.toLowerCase() == name )
}

function addScore(answer) {
  let scorer = score.find(obj => obj.name == answer)
  scorer.score++
}

module.exports = router
