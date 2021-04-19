import { getRandomNumber } from '../helpers.js';

/**
 *
 * @param {number} number
 * @returns {boolean}
 */
export const isEven = (number) => (number % 2 === 0);

/**
 * @returns {number}
 */
export const generateTask = () => {
  const randomNumber = getRandomNumber(2, 20);
  return `${randomNumber}`;
};

/**
 * @param {string} expression
 * @returns {number}
 */
export const parseExpression = (expression) => parseFloat(expression);

/**
 * @returns {string}
 */
export const description = '"yes" if the number is even, otherwise answer "no".';

/**
 *
 * @returns {array}
 */
export const playGame = () => {
  const expression = generateTask();
  const parsedExpression = parseExpression(expression);
  const rightAnswer = (isEven(parsedExpression)) ? 'yes' : 'no';
  return [expression, rightAnswer];
};
