#!/usr/bin/env node

import { greetingsGame } from '../src/cli/cli.js';
import brainProgression from '../src/games/brain-progression/brain-progression.js';

brainProgression(greetingsGame());
