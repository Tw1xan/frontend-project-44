import runGame from '../index.js';
import getRandomInRange from '../utils.js';

const generateProgression = () => {
  const progressionLength = getRandomInRange(5, 10);
  const hiddenIndex = getRandomInRange(0, progressionLength - 1);
  const startNumber = getRandomInRange();
  const step = getRandomInRange(1, 10);

  const makeProgression = (start, stepi, length) => {
    const progression = [];

    for (let i = 0; i < length; i += 1) {
      progression.push(start + stepi * i);
    }

    return progression;
  };

  const progression = makeProgression(startNumber, step, progressionLength);
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
