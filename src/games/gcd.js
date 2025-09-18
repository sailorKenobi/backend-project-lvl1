import { runQuestionsGame, getRandomInt } from '../index.js'

export const gcdGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.'
  runQuestionsGame(gameDescription, gcdPlay)
}

const gcdPlay = () => {
  const randNumber1 = getRandomInt(50)
  const randNumber2 = getRandomInt(50)
  const res = {
    question: `${randNumber1} ${randNumber2}`,
    answer: calcGcd(randNumber1, randNumber2),
  }
  return res
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
