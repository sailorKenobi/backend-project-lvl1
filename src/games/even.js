import { welcomeMessage } from '../cli.js'
import { askQuestion, getRandomInt } from '../index.js'

export const evenGame = () => {
  const userName = welcomeMessage()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  let rightAnswers = 0
  while (rightAnswers < 3) {
    const randNumber = getRandomInt(50)
    const correctAnswer = randNumber % 2 === 0 ? 'yes' : 'no'
    if (askQuestion(randNumber, correctAnswer)) {
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
