#!/usr/bin/env node

import askUser from '../src/cli/cli.js';
import brainProgression from '../src/brain-progression/brain-progression.js';

console.log('Welcome to the Brain Games!');
const name = askUser('May I have your name? ');
console.log(`Hello, ${name}`);

brainProgression(name);
