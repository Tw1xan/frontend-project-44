#!/usr/bin/env node

import { generateQuestion } from '../src/index.js';
import readlineSync from 'readline-sync';
// import { cli } from '../bin/brain-games.js';

function playCalculatorGame() {
  console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);

  for (let i = 0; i < 3; i++) {  
    const { question, correctAnswer } = generateQuestion();
    const userAnswer = readlineSync.question(`What is the result of the expression?\nQuestion: ${question}\nYour answer: `);
    
    if (userAnswer === correctAnswer.toString()) {
      console.log("Correct!");
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!\n`);
}

playCalculatorGame();

