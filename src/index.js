import readlineSync from 'readline-sync';



// общая логика игр и приветствие
export const runGame = (generateGameData, description) => {

  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!${description}`);

  const numberOfQuestions = 3;

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const [question, correctAnswer] = generateGameData();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}'\n is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};
