import { getRandomNumber } from '../helpers.js';

/**
 * @param {number} number
 * @returns {number}
 */
const biggestDivider = (number) => {
  const iterDivider = (numberForDivide, divider) => {
    if (divider === 1) return numberForDivide;
    if (numberForDivide % divider === 0) return divider;
    return iterDivider(numberForDivide, divider - 1);
  };
  return iterDivider(number, number - 1);
};

/**
 * @returns {string}
 */
export const generateTask = () => {
  const firstNumber = getRandomNumber(3, 20);
  const divider = biggestDivider(firstNumber);
  const secondNumber = divider * getRandomNumber(3, 5);
  return [firstNumber, secondNumber, divider];
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
  const [firstNumber, secondNumber, divider] = generateTask();
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = divider.toString();
  return [question, rightAnswer];
};
