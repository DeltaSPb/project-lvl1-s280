import playGame from '..';
import getRandomNum from '../functions';

const rules = 'What is the result of the expression? ';


const quesionsForCalc = () => {
  const firstNumber = getRandomNum(1, 10);
  const secondNumber = getRandomNum(1, 10);
  const randomSign = getRandomNum(0, 2);
  let sing = '';
  let getQuestion;
  let getCorrectQuestion;
  switch (randomSign) {
    case 0:
      sing = '+';
      getCorrectQuestion = String(firstNumber + secondNumber);
      getQuestion = `${firstNumber} ${sing} ${secondNumber}`;
      break;
    case 1:
      sing = '-';
      getCorrectQuestion = String(firstNumber - secondNumber);
      getQuestion = `${firstNumber} ${sing} ${secondNumber}`;
      break;
    case 2:
      sing = '*';
      getCorrectQuestion = String(firstNumber * secondNumber);
      getQuestion = `${firstNumber} ${sing} ${secondNumber}`;
      break;
    default:
      break;
  }
  return { getQuestion, getCorrectQuestion };
};
export default () => playGame(quesionsForCalc, rules);
