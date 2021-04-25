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
const generateTask = () => getRandomNumber(2, 30);

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
export const getNewRound = () => {
  const expression = generateTask();
  const rightAnswer = (isPrime(expression)) ? 'yes' : 'no';
  return [expression, rightAnswer];
};
