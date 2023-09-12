import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const calculateGCD = (a, b) => (b === 0 ? a : calculateGCD(b, a % b));

const generateGameData = () => {
  const num1 = getRandomInRange();
  const num2 = getRandomInRange();
  const question = `${num1} ${num2}`;
  const correctAnswer = calculateGCD(num1, num2).toString();
  return [question, correctAnswer];
};

const description = 'Find the greatest common divisor of given numbers.';

const gameGCD = () => {
  runGame(generateGameData, description);
};

export default gameGCD;
