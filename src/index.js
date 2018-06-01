import readlineSync from 'readline-sync';

const rightAnswers = 3;

export default (game, rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(`\n${rule}`);
  const playerName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${playerName}!`);

  const checkTheAnswer = (answerCount) => {
    if (answerCount === rightAnswers) {
      console.log(`\nCongratulations, ${playerName}!`);
      return;
    }

    const newGame = game();
    const questionToPlayer = newGame.question;
    console.log(`\nQuestion: ${questionToPlayer}`);
    const correctAnswer = newGame.answer;
    const playerAnswer = readlineSync.question('Your answer: ');

    if (playerAnswer === correctAnswer) {
      console.log('Correct!');
      checkTheAnswer(answerCount + 1);
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
    }
  };
  return checkTheAnswer(0);
};
