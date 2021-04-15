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
export const getDescriptionGame = () => '"yes" if the number is even, otherwise answer "no".';

export const playGame = (expression, userAnswer) => {
  const parsedExpression = parseExpression(expression);
  const rightAnswer = (isEven(parsedExpression)) ? 'yes' : 'no';
  return (rightAnswer === userAnswer)
    ? 'Correct!'
    : `'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
};
