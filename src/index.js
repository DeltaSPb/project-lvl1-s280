import readlineSync from 'readline-sync';

export default (game, rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(`\n${rule}`);
  const playerName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${playerName}!`);

  const rightAnswers = 3;

  const newGame = (answerCount) => {
    if (answerCount === rightAnswers) {
      return console.log(`Congratulations, ${playerName}!`);
    }

    const questionsForGame = game();
    const questionToPlayer = questionsForGame.question;
    console.log(`\nQuestion: ${questionToPlayer}`);
    const correctAnswer = questionsForGame.answer;
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      return newGame(answerCount + 1);
    }
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    return console.log(`Let's try again, ${playerName}!`);
  };
  return newGame(0);
};
