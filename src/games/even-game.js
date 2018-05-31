
import playGame from '..';
import getRandomNum from '../functions';

export const rules = 'Answer "yes" if number odd otherwise answer "no".';
export const isEven = num => num % 2 === 0;
const quesionsForEven = () => {
  const getQuestion = getRandomNum(1, 100);
  const getCorrectQuestion = (isEven(getQuestion) ? 'yes' : 'no');
  return { getQuestion, getCorrectQuestion };
};
export default () => playGame(quesionsForEven, rules);
