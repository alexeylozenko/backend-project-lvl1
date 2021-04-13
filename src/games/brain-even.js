import { getRandomNumber } from '../cli/cli.js';

/**
 * @param {number} number
 * @return {boolean}
 */
export const isEven = (number) => (number % 2 === 0);

/**
 * 
 * @param {number} number 
 * @returns {boolean}
 */
export const isNumber = (number) => !Number.isNaN(number);

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
export const parseExpression = (expression) => {
  const parsedNumber = parseFloat(expression);
  if (isNumber(parsedNumber)) {
    return parsedNumber;
  }
} 

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
