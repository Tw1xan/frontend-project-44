import runGame from '../index.js';
import getRandomInRange from '../utils.js'

const generateGameData = () => {
  const num1 = getRandomInRange();
  const num2 = getRandomInRange();
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
  runGame(generateGameData, description);
};

export default calcGame;
