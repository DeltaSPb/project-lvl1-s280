import readlineSync from 'readline-sync';

export const greeting = () => {
const player = readlineSync.question('May I have your name? ');
console.log(`Hello, ${player}!`);
};
