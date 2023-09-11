import readlineSync from 'readline-sync';

const makeWelcome = () => {
    console.log('Welcome to the Brain Games!');
    const playerName = readlineSync.question('May I have your name?\n ');
    console.log(`Hello, ${playerName}!`);
  };

  export default makeWelcome;