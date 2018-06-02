import playGame from '..';
import getRandomNum from '../utils';

const rule = 'Balance the given number.';

const getBalance = (num) => {
  let digits = String(num).split('').map(Number).sort();
  const index = digits.length - 1;

  while (digits[index] - digits[0] > 1) {
    digits[0] += 1;
    digits[index] -= 1;
    digits = digits.sort();
  }

  return Number(digits.join(''));
};

const gameData = () => {
  const number = getRandomNum(100, 500);
  const question = `${number}`;
  const answer = String(getBalance(number));

  return { question, answer };
};

export default () => playGame(gameData, rule);
