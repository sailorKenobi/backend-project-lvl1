import { runQuestionsGame, getRandomInt } from '../index.js'

export const progressionGame = () => {
  const gameDescription = 'What number is missing in the progression?'
  runQuestionsGame(gameDescription, progressionPlay)
}

const progressionPlay = () => {
  const progression = makeProgression(10)
  const missingIndex = getRandomInt(9)
  const missingNumber = progression[missingIndex]
  progression[missingIndex] = '..'
  const res = {
    question: progression.join(' '),
    answer: missingNumber,
  }
  return res
}

const makeProgression = (length) => {
  const res = []
  let newElement = getRandomInt(25)
  const increment = getRandomInt(9) + 1
  for (let i = 0; i < length; i++) {
    res.push(newElement)
    newElement += increment
  }
  return res
}
