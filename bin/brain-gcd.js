#!/usr/bin/env node

import { welcome, runGame } from '../src/index.js';


const calculateGCD = (a, b) => (b === 0 ? a : calculateGCD(b, a % b));

const generateGameData = () => {
  const num1 = Math.floor(Math.random() * 50) + 1;
  const num2 = Math.floor(Math.random() * 50) + 1;
  const question = `${num1} ${num2}`;
  const correctAnswer = calculateGCD(num1, num2).toString();
  return [question, correctAnswer];
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => {
  welcome(description);
  runGame(generateGameData);
};

 
