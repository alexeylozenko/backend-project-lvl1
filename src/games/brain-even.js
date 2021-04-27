import { getRandomNumber } from '../helpers.js';

/**
 *
 * @param {number} number
 * @returns {boolean}
 */
const isEven = (number) => (number % 2 === 0);

/**
 * @returns {string}
 */
export const description = '"yes" if the number is even, otherwise answer "no".';

/**
 *
 * @returns {array}
 */
export const getNewRound = () => {
  const question = getRandomNumber(2, 20);
  const rightAnswer = (isEven(question)) ? 'yes' : 'no';
  return [question, rightAnswer];
};
