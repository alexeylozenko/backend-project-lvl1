import getRandomNumber from '../helpers.js';

/**
 *
 * @param {number} firstValue
 * @param {number} secondValue
 * @returns {number}
 */
const getBiggestCommonDivisor = (firstValue, secondValue) => {
  if (secondValue === 0) {
    return firstValue;
  }
  return getBiggestCommonDivisor(secondValue, firstValue % secondValue);
};

const game = {
  description: 'Find the greatest common divisor of given numbers.',
  getNewRound: () => {
    const firstValue = getRandomNumber(10, 20);
    const secondValue = getRandomNumber(2, 10);
    const rightAnswer = getBiggestCommonDivisor(firstValue, secondValue);
    const question = `${firstValue} ${secondValue}`;
    return [question, rightAnswer.toString()];
  },
};

export default game;
