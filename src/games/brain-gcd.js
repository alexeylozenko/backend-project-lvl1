import { getRandomNumber } from '../helpers.js';

/**
 * @param {number} num
 * @returns {number}
 */
const getBiggestDivider = (num) => {
  const iterDivider = (numberForDivide, divider) => {
    if (divider === 1) return numberForDivide;
    if (numberForDivide % divider === 0) return divider;
    return iterDivider(numberForDivide, divider - 1);
  };
  return iterDivider(num, num - 1);
};

/**
 *
 * @returns {string}
 */
export const description = 'Find the greatest common divisor of given numbers.';

/**
 *
 * @returns {array}
 */
export const getNewRound = () => {
  const firstValue = getRandomNumber(3, 20);
  const biggestDivider = getBiggestDivider(firstValue);
  const secondValue = biggestDivider * getRandomNumber(3, 5);
  const rightAnswer = (secondValue % firstValue === 0) ? firstValue : biggestDivider;
  const question = `${firstValue} ${secondValue}`;
  return [question, rightAnswer.toString()];
};
