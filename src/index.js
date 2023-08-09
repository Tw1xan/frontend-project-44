
import readlineSync from 'readline-sync';

export function isEven(number) {
    return number % 2 === 0;
  }
  
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
  }
  
  
  