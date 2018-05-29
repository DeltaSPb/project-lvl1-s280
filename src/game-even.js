import readlineSync from 'readline-sync';

const evenGame = (player, acc = 0, min = 2, max = 100) => {
  if (acc === 3) {
    console.log(`Congratulations, ${player}!`);
    return true;
  }

  const randomNum = Math.floor(Math.random() * ((max - min) + min));
  console.log(`Question: ${randomNum}`);
  const isEven = randomNum % 2 === 0;
  const correctAnsw = isEven ? 'yes' : 'no';
  const playerAnsw = readlineSync.question('Your answer: ');

  if (playerAnsw === correctAnsw) {
    console.log('Correct!');
    return evenGame(player, acc + 1);
  }

  console.log(`'${playerAnsw}' is wrong answer ;(. Correct answer was '${correctAnsw}'.`);
  console.log(`Let's try again, ${player}!`);
  return false;
};
export default evenGame;
