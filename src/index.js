import { getInput } from './cli.js'

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
  return Math.floor(Math.random() * max)
}
