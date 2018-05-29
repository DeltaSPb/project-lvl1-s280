import readlineSync from 'readline-sync';

export default () => {
  const player = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${player}!`);
};
