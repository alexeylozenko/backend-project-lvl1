#!/usr/bin/env node

import { greetingsGame } from '../src/cli/cli.js';
import brainPrime from '../src/games/brain-prime/brain-prime.js';

brainPrime(greetingsGame());
