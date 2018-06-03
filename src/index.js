import readlineSync from 'readline-sync';

const rounds = 3;

export default (game, rule) => {
  console.log('Welcome to the Brain Games!');
  console.log(`\n${rule}`);
  const playerName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello, ${playerName}!`);

  const checkTheAnswer = (answerCount) => {
    if (answerCount === rounds) {
      console.log(`\nCongratulations, ${playerName}!`);
      return;
    }

    const { question, answer } = game();
    const questionToPlayer = question;
    console.log(`\nQuestion: ${questionToPlayer}`);
    const correctAnswer = answer;
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
