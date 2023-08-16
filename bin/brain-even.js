#!/usr/bin/env node

import { cli, runGame, isEven } from '../src/index.js';


const generateGameData = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  cli(description);
  runGame(generateGameData);
};
evenGame();

export default evenGame;
