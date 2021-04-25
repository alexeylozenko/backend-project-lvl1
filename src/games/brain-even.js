import { getRandomNumber } from '../helpers.js';

/**
 *
 * @param {number} number
 * @returns {boolean}
 */
const isEven = (number) => (number % 2 === 0);

/**
 * @returns {number}
 */
const generateTask = () => getRandomNumber(2, 20);

/**
 * @returns {string}
 */
export const description = '"yes" if the number is even, otherwise answer "no".';

/**
 *
 * @returns {array}
 */
export const getNewRound = () => {
  const expression = generateTask();
  const rightAnswer = (isEven(expression)) ? 'yes' : 'no';
  return [expression, rightAnswer];
};
