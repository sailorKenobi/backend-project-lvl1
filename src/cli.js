import readlineSync from 'readline-sync';

export const getInput = (question) => {
	const input = readlineSync.question(`${question} `);
	return input;
}
