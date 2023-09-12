import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }
  return true;
};

const generateGameData = () => {
  const number = getRandomInRange();
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => {
  runGame(generateGameData, description);
};

export default brainPrime;
