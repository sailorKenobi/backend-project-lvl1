import readlineSync from 'readline-sync';

const getInput = (question) => {
  const input = readlineSync.question(`${question} `);
  return input;
};

export default getInput;
