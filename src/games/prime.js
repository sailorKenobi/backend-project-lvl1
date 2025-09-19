import { runQuestionsGame, getRandomInt } from '../index.js'

export const primeGame = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".'
  runQuestionsGame(gameDescription, primePlay)
}

const primePlay = () => {
  const randNumber = getRandomInt(100)
  const res = {
    question: randNumber,
    answer: isPrime(randNumber),
  }
  return res
}
const isPrime = (number) => {
  if (number < 2)
    return 'no'
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0)
      return 'no'
  }
  return 'yes'
}
