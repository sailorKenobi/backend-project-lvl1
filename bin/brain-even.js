#!/usr/bin/env node

import getInput from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = getInput('May I have your name?');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let correctAnswersCount = 0;
for (let i = 0; i < 3; i += 1) {
  const randNumber = Math.round(Math.random() * 100);
  const numberIsOdd = (randNumber % 2) === 0;
  const correctAnswer = numberIsOdd ? 'yes' : 'no';
  const answer = getInput(`Question: ${randNumber}`);
  if (correctAnswer === answer) {
    console.log('Correct!');
    correctAnswersCount += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}

if (correctAnswersCount === 3) {
  console.log(`Congratulations, ${name}!`);
}
