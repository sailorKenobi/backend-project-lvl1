import { runQuestionsGame, getRandomInt } from '../index.js'

export const evenGame = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".'
  runQuestionsGame(gameDescription, evenPlay)
}

const evenPlay = () => {
  const randNumber = getRandomInt(50)
  const res = {
    question: randNumber,
    answer: randNumber % 2 === 0 ? 'yes' : 'no',
  }
  return res
}
