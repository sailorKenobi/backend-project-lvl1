import readlineSync from 'readline-sync'

export const welcomeMessage = () => {
  console.log('Welcome to the Brain Games!')
  const userName = getInput('May I have your name? ')
  console.log(`Hello, ${userName}`)
  return userName
}

export const getInput = (message) => {
  return readlineSync.question(message)
}
