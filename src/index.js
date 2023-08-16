import readlineSync from 'readline-sync';

    export function isEven(number) {
        return number % 2 === 0;
      };

    
  // Логика игры калькулятор
  
  const operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };
  
  function generateQuestion() {
    const num1 = Math.floor(Math.random() * 20) + 1;
    const num2 = Math.floor(Math.random() * 20) + 1;
    const operation = getRandomOperation();
    const question = `${num1} ${operation} ${num2}`;
    const correctAnswer = operations[operation](num1, num2);
    return { question, correctAnswer };
  }
  
  function getRandomOperation() {
    const operationKeys = Object.keys(operations);
    return operationKeys[Math.floor(Math.random() * operationKeys.length)];
  }
  
  export { generateQuestion };
  
  
  // Логика игры НОД (Наибольший общий делитель)


export const cli = (description) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!\n${description}и`);
};

export const runGame = (generateGameData) => {
  const numberOfQuestions = 3;

  for (let i = 0; i < numberOfQuestions; i += 1) {
    const [question, correctAnswer] = generateGameData();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again!`);
      return;
    }
  }

  console.log(`Congratulations!`);
};
