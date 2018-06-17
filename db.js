const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getQuestion: getQuestion
}

function getQuestion (id, testConn) {
  const conn = testConn || connection
  return conn('questions').where('id', id)
    .join('answers', 'questions.id', 'answers.question_id')
    .select()
    .then((data) => {
        return tidyQuestion(data)
    })
}

function getUser (id, testConn) {
  const conn = testConn || connection
  return conn('users').where('id', id).first()
}

function tidyQuestion (questionArr) {
    let tidied = {}
    tidied.question = questionArr[0].question
    tidied.answers = []
    for (i = 0; i < questionArr.length; i++) {
        let singleObj = {}
        singleObj.name = questionArr[i].name
        singleObj.answer = questionArr[i].answer
        singleObj.answer_id = questionArr[i].answer_id
        tidied.answers.push(singleObj)
    }
 return tidied
}