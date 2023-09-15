import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[Math.floor(Math.random() * operators.length)];
};
const calculation = (num1, num2, operation) => {
  switch (operation) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    
    default:
      throw new Error(`Operator ${operation} is incorrect!`);
  }
};

const generateGameData = () => {
  const num1 = getRandomInRange();
  const num2 = getRandomInRange();
  const operator = getRandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = calculation(num1, num2, operator);

  return [question, correctAnswer.toString()];
};

const description = 'What is the result of the expression?';

const calcGame = () => {
  runGame(generateGameData, description);
};

export default calcGame;
