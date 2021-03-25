#!/usr/bin/env node

import askUser from '../src/cli/cli.js';
import brainPrime from '../src/brain-prime/brain-prime.js';

console.log('Welcome to the Brain Games!');
const name = askUser('May I have your name? ');
console.log(`Hello, ${name}!`);

brainPrime(name);
