import { welcomeMessage, getInput } from './cli.js'

export const evenGame = () => {
  const userName = welcomeMessage()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  let rightAnswers = 0
  while (rightAnswers < 3) {
    const randNumber = getRandomInt(50)
    console.log(`Question: ${randNumber}`)
    const answer = getInput('Your answer: ')
    const correctAnswer = randNumber % 2 === 0 ? 'yes' : 'no'
    if (answer == correctAnswer) {
      rightAnswers++
      console.log('Correct!')
    }
    else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`)
      console.log(`Let's try again, ${userName}!`)
      break
    }
  }
  if (rightAnswers === 3)
    console.log(`Congratulations, ${userName}`)
}

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max)
}
