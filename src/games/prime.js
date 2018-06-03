import playGame from '..';
import getRandomNum from '../utils';

const rule = 'Is this number prime?';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const gameData = () => {
  const question = getRandomNum(1, 100);
  const answer = (isPrime(question) ? 'yes' : 'no');
  return { question, answer };
};
export default () => playGame(gameData, rule);
