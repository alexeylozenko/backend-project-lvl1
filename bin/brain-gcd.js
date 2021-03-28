#!/usr/bin/env node

import brainGcd from '../src/brain-gcd/brain-gcd.js';
import askUser from '../src/cli/cli.js';

console.log('Welcome to the Brain Games!');
const name = askUser('May I have your name? ');
console.log(name);

brainGcd(name);
