#!/usr/bin/env node
import askUser from '../src/cli/cli.js';
import brainCalc from '../src/brain-calc/brain-calc.js';

console.log('Welcome to the Brain Games!');
const name = askUser('May I have your name? ');
console.log(`Hello, ${name}`);

brainCalc(name);
