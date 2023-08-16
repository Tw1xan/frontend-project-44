#!/usr/bin/env node

import readlineSync from 'readline-sync';


export const cli = () => {
console.log('Welcome to the Brain Games!');
let name = readlineSync.question('May I have your name? ');
return console.log('Hello,' + name + '!');
};

cli();







