import readlineSync from 'readline-sync';
import { greeting, isEven } from './functions';

export const evenGame = () => {
  const player = greeting();
  console.log('Answer "yes" if number even otherwise answer "no".');

  const game = (acc) => {
    if (acc === 0) {
      return console.log(`Congratulations, ${player}!`);
    }

    const question = Math.floor(Math.random() * 100);
    console.log(`Question: ${question}`);
    const correctAnswer = isEven(question) ? 'yes' : 'no';
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      return game(acc - 1);
    }
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return console.log(`Let's try again, ${player}!`);
  };
  return game(3);
};
