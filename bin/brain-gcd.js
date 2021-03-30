#!/usr/bin/env node

import { greetingsGame } from '../src/cli/cli.js';
import brainGcd from '../src/brain-gcd/brain-gcd.js';

brainGcd(greetingsGame());
