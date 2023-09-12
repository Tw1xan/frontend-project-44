import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const generateProgression = () => {
  const progressionLength = Math.floor(Math.random() * 6) + 5;
  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  const startNumber = getRandomInRange();
  const step = Math.floor(Math.random() * 10) + 1;

  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(startNumber + step * i);
  }
  const correctAnswer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';

  const question = progression.join(' ');
  return [question, correctAnswer];
};

const description = 'What number is missing in the progression?';

const progressionGameTop = () => {
  runGame(generateProgression, description);
};

export default progressionGameTop;
