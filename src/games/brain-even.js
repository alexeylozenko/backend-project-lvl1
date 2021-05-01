import { getRandomNumber } from '../helpers.js';

/**
 *
 * @param {number} number
 * @returns {boolean}
 */
const isEven = (number) => (number % 2 === 0);

const game = {
  description: '"yes" if the number is even, otherwise answer "no".',
  getNewRound: () => {
    const question = getRandomNumber(2, 20);
    const rightAnswer = (isEven(question)) ? 'yes' : 'no';
    return [question, rightAnswer];
  },
};

export default game;
