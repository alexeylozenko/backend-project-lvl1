#!/usr/bin/env node

import brainEven from '../src/brain-even/brain-even.js';
import askUser from '../src/cli/cli.js';

const name = askUser('May I have your name? ');
console.log(`Hello, ${name}`);

brainEven(name);
