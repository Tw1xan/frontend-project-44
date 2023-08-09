#!/usr/bin/env node

import readlineSync from 'readline-sync';

import { playGame } from '../src/index.js'

function isEven(number) {
  return number % 2 === 0;
};

playGame();