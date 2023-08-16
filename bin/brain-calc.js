#!/usr/bin/env node

import { cli, runGame } from '../src/index.js';


const generateGameData = () => {
  const num1 = Math.floor(Math.random() * 50);
  const num2 = Math.floor(Math.random() * 50);
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const question = `${num1} ${operator} ${num2}`;
  
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = (num1 + num2).toString();
      break;
    case '-':
      correctAnswer = (num1 - num2).toString();
      break;
    case '*':
      correctAnswer = (num1 * num2).toString();
      break;
    default:
      break;
  }
  
  return [question, correctAnswer];
};

const description = 'What is the result of the expression?';

const calcGame = () => {
  cli(description);
  runGame(generateGameData);
};

calcGame();

export default calcGame;
