import playGame from '..';
import { getRandomNum } from '../utils';

const rule = 'What is the result of the expression? ';


const quesionsForCalc = () => {
  const firstNumber = getRandomNum(1, 10);
  const secondNumber = getRandomNum(1, 10);
  const randomSign = getRandomNum(0, 2);
  let sing;
  let question;
  let answer;
  switch (randomSign) {
    case 0:
      sing = '+';
      answer = String(firstNumber + secondNumber);
      question = `${firstNumber} ${sing} ${secondNumber}`;
      break;
    case 1:
      sing = '-';
      answer = String(firstNumber - secondNumber);
      question = `${firstNumber} ${sing} ${secondNumber}`;
      break;
    case 2:
      sing = '*';
      answer = String(firstNumber * secondNumber);
      question = `${firstNumber} ${sing} ${secondNumber}`;
      break;
    default:
      break;
  }
  return { question, answer };
};
export default () => playGame(quesionsForCalc, rule);
