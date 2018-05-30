import readlineSync from 'readline-sync';

export const greeting = () => {
  const player = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${player}!`);
};

export const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const player = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${player}!`);

  const game = (acc) => {
    if (acc === 0) {
      return console.log(`Congratulations, ${player}!`);
    }

    const randomNum = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomNum}`);
    const isEven = randomNum % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
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
