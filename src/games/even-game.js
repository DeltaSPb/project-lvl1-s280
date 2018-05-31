import playGame from '..';
import { getRandomNum } from '../utils';

const rule = 'Answer "yes" if number odd otherwise answer "no".';
const isEven = num => num % 2 === 0;
const quesionsForEven = () => {
  const question = getRandomNum(1, 100);
  const answer = (isEven(question) ? 'yes' : 'no');
  return { question, answer };
};
export default () => playGame(quesionsForEven, rule);
