import { getRandomNumber } from '../helpers.js';

/**
 * @param {number} startNumber
 * @param {number} step
 * @param {number} rangeProgression
 * @returns {array}
 */
const generateProgression = (startNumber, step, rangeProgression = 10) => {
  const iter = (firstValue, acc) => {
    if (acc.length === rangeProgression) {
      return acc;
    }
    acc.push(firstValue);
    return iter(firstValue + step, acc);
  };
  return iter(startNumber, []);
};

/**
 *
 * @param {array} array
 * @returns {array}
 */
const extractProgressionNumber = (array) => {
  const arr = array;
  const index = getRandomNumber(2, array.length - 1);
  const rightAnswer = arr[index];
  arr[index] = '..';
  return [rightAnswer, arr];
};

/**
 * @returns {array}
 */
const generateTask = () => {
  const step = getRandomNumber(2, 5);
  const startNumber = getRandomNumber(2, 10);
  const progression = generateProgression(startNumber, step);
  const [rightAnswer, question] = extractProgressionNumber(progression);
  return [rightAnswer, question.join(' ')];
};

/**
 *
 * @returns {string}
 */
export const description = 'What number is missing in the progression?';

/**
 * @returns {array}
 */
export const getNewRound = () => {
  const [rightAnswer, question] = generateTask();
  return [question, rightAnswer.toString()];
};
