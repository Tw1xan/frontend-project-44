#!/usr/bin/env node

import readlineSync from 'readline-sync';

const cli = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name?\n ');
  console.log(`Hello, ${playerName}!`);
};

cli();

export default cli;
