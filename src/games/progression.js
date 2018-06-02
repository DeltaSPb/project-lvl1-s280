import playGame from '..';
import getRandomNum from '../utils';

const progressionLength = 10;

const rule = 'What number is missing in this progression?';

const getProgression = () => {
  const newArr = [];
  const firstNumber = getRandomNum(2, 10);
  const step = getRandomNum(2, 9);
  newArr[0] = firstNumber;

  for (let i = 0; i <= progressionLength; i += 1) {
    newArr[i + 1] = (newArr[i] + step);
  }

  return newArr;
};

const gameData = () => {
  const progression = getProgression();
  const missedIndex = getRandomNum(0, progressionLength - 1);
  const answer = String(progression[missedIndex]);
  progression[missedIndex] = '..';
  const question = progression.join(' ');

  return { question, answer };
};
export default () => playGame(gameData, rule);
