#!/usr/bin/env node

import { runCLI } from '../src/cli/cli.js';
import * as gameModule from '../src/games/brain-gcd.js';

runCLI(gameModule);
