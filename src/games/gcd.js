import playGame from '..';
import { getRandomNum, gcd } from '../utils';

const rule = 'Find the greatest common divisor of given numbers.';
const gameData = () => {
  const firstNumber = getRandomNum(1, 20);
  const secondNumber = getRandomNum(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = String(gcd(firstNumber, secondNumber));
  return { question, answer };
};
export default () => playGame(gameData, rule);
