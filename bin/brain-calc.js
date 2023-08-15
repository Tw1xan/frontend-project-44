import { generateQuestion } from '../src/index.js';
import readlineSync from 'readline-sync';


function playCalculatorGame() {
  console.log("brain-calc\nWelcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!\n`);

  for (let i = 0; i < 3; i++) {  // Number of questions
    const { question, correctAnswer } = generateQuestion();
    const userAnswer = readlineSync.question(`What is the result of the expression?\nQuestion: ${question}\nYour answer: `);
    
    if (userAnswer === correctAnswer.toString()) {
      console.log("Correct!\n");
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!\n`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!\n`);
}

playCalculatorGame();

