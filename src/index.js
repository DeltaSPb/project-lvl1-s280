import readlineSync from 'readline-sync';
import greeting from './functions';
import { rule, getQuestion, getCorrectQuestion } from './games/even-game';

export default () => {
  const player = greeting();
  console.log(rule);

  const game = (rightAnswers) => {
    if (rightAnswers === 3) {
      return console.log(`Congratulations, ${player}!`);
    }

    const question = getQuestion();
    console.log(`Question: ${question}`);
    const correctAnswer = getCorrectQuestion(question);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      return game(rightAnswers + 1);
    }
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return console.log(`Let's try again, ${player}!`);
  };
  return game(0);
};
