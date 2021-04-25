import { getRandomNumber } from '../helpers.js';

/**
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 */
const multiplication = (firstNumber, secondNumber) => firstNumber * secondNumber;

/**
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 */
const additional = (firstNumber, secondNumber) => firstNumber + secondNumber;

/**
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 */
const substraction = (firstNumber, secondNumber) => firstNumber - secondNumber;

/**
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @param {number}
 */
const calculate = (firstNumber, secondNumber, operator) => operator(firstNumber, secondNumber);

const MathOperators = [
  ['*', multiplication],
  ['+', additional],
  ['-', substraction],
];

/**
 *
 * @param {string} operator
 * @param {array} operators
 * @returns {function}
 */
const getFunctionByOperator = (operator, operators) => {
  const iteratorOfOperators = (currOperator, allOperators, index) => {
    if (index === allOperators.length) {
      return null;
    }
    if (currOperator === allOperators[index][0]) {
      return allOperators[index][1];
    }
    return iteratorOfOperators(currOperator, allOperators, index + 1);
  };
  return iteratorOfOperators(operator, operators, 0);
};

/**
 *
 * @param {array} operators
 * @returns {string}
 */
const getRandomOperator = (operators) => {
  const randomIndexOfOperators = getRandomNumber(0, operators.length);
  return operators[randomIndexOfOperators][0];
};

/**
 * @returns {string}
 */
const generateTask = () => {
  const firstNumber = getRandomNumber(2, 15);
  const secondNumber = getRandomNumber(2, 10);
  const operator = getRandomOperator(MathOperators);
  return [firstNumber, secondNumber, operator];
};

/**
 *
 * @returns {string}
 */
export const description = 'What is the result of the expression?';

/**
 * @returns {array}
 */
export const getNewRound = () => {
  const [firstNumber, secondNumber, operator] = generateTask();
  const question = `${firstNumber} ${operator} ${secondNumber}`;
  const mathFunction = getFunctionByOperator(operator, MathOperators);
  const rightAnswer = calculate(firstNumber, secondNumber, mathFunction);
  return [question, rightAnswer.toString()];
};
