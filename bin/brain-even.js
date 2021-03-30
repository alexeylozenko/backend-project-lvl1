#!/usr/bin/env node

import brainEven from '../src/brain-even/brain-even.js';
import { greetingsGame } from '../src/cli/cli.js';

brainEven(greetingsGame());
