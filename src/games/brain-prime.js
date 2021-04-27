import { getRandomNumber } from '../helpers.js';

/**
 * @param {number} num
 * @returns {boolean}
 */
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

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
  const question = getRandomNumber(2, 30);
  const rightAnswer = (isPrime(question)) ? 'yes' : 'no';
  return [question, rightAnswer];
};
