import { getRandomNumber } from '../helpers.js';

/**
 * @param {number} number
 * @returns {number}
 */
export const biggestDivider = (number) => {
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
  const firstNumber = getRandomNumber(10, 20);
  const divider = biggestDivider(firstNumber);
  const secondNumber = divider * getRandomNumber(3, 5);
  return `${firstNumber} ${secondNumber}`;
};

/**
 *
 * @returns {string}
 */
export const getDescriptionGame = () => 'Find the greatest common divisor of given numbers.';

/**
 *
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @returns {number}
 */
const greatestCommonDivider = (firstNumber, secondNumber) => ((secondNumber % firstNumber === 0)
  ? firstNumber
  : biggestDivider(firstNumber));

/**
 *
 * @param {string} expression
 * @returns {array}
 */
const parseExpression = (expression) => {
  const [firstNumber, secondNumber] = expression.split(' ');
  return [parseFloat(firstNumber), parseFloat(secondNumber)];
};

/**
 *
 * @param {string} expression
 * @param {string} userAnswer
 * @returns {string}
 */
export const playGame = (expression, userAnswer) => {
  const [firstNumber, secondNumber] = parseExpression(expression);
  const rightAnswer = greatestCommonDivider(firstNumber, secondNumber);
  const parsedUserAnswer = parseFloat(userAnswer);
  return (rightAnswer === parsedUserAnswer)
    ? 'Correct!'
    : `'${parsedUserAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
};
