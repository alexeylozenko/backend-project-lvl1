#!/usr/bin/env node
import { greetingsGame } from '../src/cli/cli.js';
import brainCalc from '../src/brain-calc/brain-calc.js';

brainCalc(greetingsGame());
