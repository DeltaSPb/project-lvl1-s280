import playGame from '..';
import { getRandomNum } from '../utils';

const rule = 'What is the result of the expression? ';

const quesionsForCalc = () => {
  const firstNumber = getRandomNum(1, 10);
  const secondNumber = getRandomNum(1, 10);
  const randomSign = getRandomNum(0, 2);

  let question;
  let answer;
  switch (randomSign) {
    case 0:
      answer = String(firstNumber + secondNumber);
      question = `${firstNumber} + ${secondNumber}`;
      break;
    case 1:
      answer = String(firstNumber - secondNumber);
      question = `${firstNumber} - ${secondNumber}`;
      break;
    case 2:
      answer = String(firstNumber * secondNumber);
      question = `${firstNumber} * ${secondNumber}`;
      break;
    default:
      break;
  }
  return { question, answer };
};
export default () => playGame(quesionsForCalc, rule);
