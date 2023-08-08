#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { cli } from './brain-games.js'



const getDescription = () => {
    const description = console.log('Answer "yes" if the number is even, otherwise answer "no".');
    return description;
};

getDescription();
//  export default () => {

//     const countReplay = 3;

    
// };
// export const randomNumber = (min, max) => {
//     const randomMarker = Math.floor(Math.random() * (max - min + 1)) + min;
//     return randomMarker;
// };

// export const evenNumber = (number) => number % 2 === 0;

// export const getRandomAndQuestion = () => {
//     const questions = randomNumber(1, 100);
//     const rightAnswer = evenNumber(questions) ? 'yes' : 'no';
//     return [questions, rightAnswer];
// };
// export const games = () => {
//     getRandomAndQuestion(getDescription, getRandomAndQuestion);
// };

// for (let i = 0; i < roundsCount; i += 1) {
//     const [question, correctAnswer] = getQuestionAndAnswer();
//     console.log(`Question: ${question}`);
//     const playerAnswer = readlineSync.question('You answer: ');

//     if (correctAnswer === playerAnswer) {
//       console.log('Correct!');
//     } else {
//       console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
//       console.log(`Let's try again, ${playerName}`);
//       return;
//     }
//   }
//   console.log(`Congratulations, ${playerName}`);
// };
