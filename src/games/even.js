
import runGame from '../index.js';
import { getRandomInRange } from '../utils.js';

function isEven(number) {
  return number % 2 === 0;
}

const generateGameData = () => {
  const number = getRandomInRange();
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const evenGame = () => {
  runGame(generateGameData, description);
};


export default evenGame;
