#!/usr/bin/env node

import { runGame } from '../src/index.js';

function isEven(number) {
  return number % 2 === 0;
}

const generateGameData = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  
  runGame(generateGameData);
};
evenGame();

export default evenGame;
