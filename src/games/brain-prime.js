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

const game = {
  description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getNewRound: () => {
    const question = getRandomNumber(2, 30);
    const rightAnswer = (isPrime(question)) ? 'yes' : 'no';
    return [question, rightAnswer];
  },
};

export default game;
