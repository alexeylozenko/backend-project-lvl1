import { getRandomNumber } from '../helpers.js';

/**
 * @param {number} number
 * @returns {boolean}
 */
const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return true;
};

/**
 *
 * @returns {number}
 */
export const generateTask = () => getRandomNumber(2, 30);

/**
 *
 * @returns {string}
 */
export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

/**
 *
 * @param {string} expression
 * @param {string} answerUser
 * @returns {string}
 */
export const playGame = () => {
  const expression = generateTask();
  const parsedExpression = parseFloat(expression);
  const rightAnswer = (isPrime(parsedExpression)) ? 'yes' : 'no';
  return [expression, rightAnswer];
};
