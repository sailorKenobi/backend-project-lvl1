#!/usr/bin/env node

import getInput from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = getInput('May I have you name?');
console.log(`Hello, ${name}`);
