#!/usr/bin/env nod

import readlineSync from 'readline-sync';
console.log('Welcome to the Brain Games!')
export const cli =() => {
let userName = readlineSync.question('May I have your name? ');
return console.log('Hello,' + userName + '!');
};
cli();



