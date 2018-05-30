import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const player = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${player}!`);
  return player;
};

export const isEven = num => num % 2 === 0;
