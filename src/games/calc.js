import { welcomeMessage } from '../cli.js'
import { askQuestion, getRandomInt } from '../index.js'

export const calcGame = () => {
  const operations = ['+', '-', '*']
  const userName = welcomeMessage()
  console.log('What is the result of the expression?')
  let rightAnswers = 0
  while (rightAnswers < 3) {
    const randNumber1 = getRandomInt(50)
    const randNumber2 = getRandomInt(50)
    const randOperation = operations[getRandomInt(3)]
    const question = (`Question: ${randNumber1} ${randOperation} ${randNumber2}`)
    const correctAnswer = getCalc(randNumber1, randNumber2, randOperation)
    if (askQuestion(question, correctAnswer)) {
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

const getCalc = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
  }
}
