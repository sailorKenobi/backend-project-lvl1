import { welcomeMessage } from '../cli.js'
import { askQuestion, getRandomInt } from '../index.js'

export const gcdGame = () => {
  const userName = welcomeMessage()
  console.log('Find the greatest common divisor of given numbers.')
  let rightAnswers = 0
  while (rightAnswers < 3) {
    const randNumber1 = getRandomInt(50)
    const randNumber2 = getRandomInt(50)
    const correctAnswer = calcGcd(randNumber1, randNumber2)
    if (askQuestion(`${randNumber1} ${randNumber2}`, correctAnswer)) {
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

const calcGcd = (a, b) => {
  const max = Math.min(a, b)
  let div = 1
  for (let i = 2; i <= max; i++) {
    if (a % i === 0 && b % i === 0)
      div = i
  }
  return div
}
