import { runQuestionsGame, getRandomInt } from '../index.js'

const operations = ['+', '-', '*']

export const calcGame = () => {
  const gameDescription = 'What is the result of the expression?'
  runQuestionsGame(gameDescription, calcPlay)
}

const calcPlay = () => {
  const randNumber1 = getRandomInt(50)
  const randNumber2 = getRandomInt(50)
  const randOperation = operations[getRandomInt(3) - 1]
  const res = {
    question: `${randNumber1} ${randOperation} ${randNumber2}`,
    answer: getCalc(randNumber1, randNumber2, randOperation),
  }
  return res
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
