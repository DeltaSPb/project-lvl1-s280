import playGame from '..';
import getRandomNum from '../utils';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
};

const gameData = () => {
  const firstNumber = getRandomNum(1, 25);
  const secondNumber = getRandomNum(26, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(gcd(firstNumber, secondNumber));
  return { question, answer };
};
export default () => playGame(gameData, rule);
