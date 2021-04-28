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
 * @returns {string}
 */
export const description = 'What number is missing in the progression?';

/**
 * @returns {array}
 */
export const getNewRound = () => {
  const step = getRandomNumber(2, 5);
  const startValue = getRandomNumber(2, 10);
  const progression = generateProgression(startValue, step);
  const index = getRandomNumber(1, progression.length - 1);
  const rightAnswer = progression[index];
  progression[index] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer.toString()];
};
