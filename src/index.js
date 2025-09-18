import { getInput } from './cli.js'
import { welcomeMessage } from './cli.js'
import { Random } from 'random-js'

export const runQuestionsGame = (gameDescription, getQuestion) => {
  const userName = welcomeMessage()
  console.log(gameDescription)
  let rightAnswers = 0
  while (rightAnswers < 3) {
    const questionObj = getQuestion()
    if (askQuestion(questionObj.question, questionObj.answer)) {
      rightAnswers++
    }
    else {
      console.log(`Let's try again, ${userName}!`)
      break
    }
  }
  if (rightAnswers === 3)
    console.log(`Congratulations, ${userName}`)
}

export const askQuestion = (question, correctAnswer) => {
  console.log(`Question: ${question}`)
  const answer = getInput('Your answer: ')
  if (answer == correctAnswer) {
    console.log('Correct!')
    return true
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    return false
  }
}

export const getRandomInt = (max) => {
  const random = new Random()
  return random.integer(0, max)
}
