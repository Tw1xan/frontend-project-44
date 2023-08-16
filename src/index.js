import readlineSync from 'readline-sync';

    export function isEven(number) {
        return number % 2 === 0;
      };

    export function playGame() {
      console.log("Welcome to the Brain Games!");
  const name = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${name}!`);
    console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
  
    let correctAnswers = 0;
  
    while (correctAnswers < 3) {
      const questionNumber = Math.floor(Math.random() * 100) + 1;
      console.log(`Question: ${questionNumber}`);
  
      const userAnswer = readlineSync.question("Your answer: ");
      const correctAnswer = isEven(questionNumber) ? "yes" : "no";
  
      if (userAnswer === correctAnswer) {
        console.log("Correct!");
        correctAnswers++;
      } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${name}!`);
        return;
      }
    }
  
    console.log(`Congratulations, ${name}!`);
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


export const welcome = (description) => {
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
