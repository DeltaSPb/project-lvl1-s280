#!/usr/bin/env node

import greeting from '..';
import evenGame from '../game-even';

console.log('Welcome to The Brain Games');
console.log('Answer "yes" if number even otherwise answer "no".');

const player = greeting();

evenGame(player);
