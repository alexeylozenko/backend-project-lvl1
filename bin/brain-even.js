#!/usr/bin/env node

import brainEven from '../src/games/brain-even/brain-even.js';
import { greetingsGame } from '../src/cli/cli.js';

brainEven(greetingsGame());
