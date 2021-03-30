#!/usr/bin/env node

import { greetingsGame } from '../src/cli/cli.js';
import brainPrime from '../src/brain-prime/brain-prime.js';

brainPrime(greetingsGame());
