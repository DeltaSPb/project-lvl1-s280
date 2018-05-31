import readlineSync from 'readline-sync';
// import greeting from './functions';

export default (game, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const player = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${player}!`);

  const newGame = (rightAnswers) => {
    if (rightAnswers === 3) {
      return console.log(`Congratulations, ${player}!`);
    }

    const questionsForGame = game();
    const question = questionsForGame.getQuestion;
    console.log(`Question: ${question}`);
    const correctAnswer = questionsForGame.getCorrectQuestion;
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      return newGame(rightAnswers + 1);
    }
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return console.log(`Let's try again, ${player}!`);
  };
  return newGame(0);
};
