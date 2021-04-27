import { getRandomNumber } from '../helpers.js';

/**
 * @param {number} leftOperand
 * @param {number} rightOperand
 * @return {number}
 */
const multiplication = (leftOperand, rightOperand) => leftOperand * rightOperand;

/**
 * @param {number} leftOperand
 * @param {number} rightOperand
 * @return {number}
 */
const additional = (leftOperand, rightOperand) => leftOperand + rightOperand;

/**
 * @param {number} leftOperand
 * @param {number} rightOperand
 * @return {number}
 */
const substraction = (leftOperand, rightOperand) => leftOperand - rightOperand;

/**
 * @param {number} leftOperand
 * @param {number} rightOperand
 * @param {number}
 */
const calculate = (leftOperand, rightOperand, operator) => operator(leftOperand, rightOperand);

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
 *
 * @returns {string}
 */
export const description = 'What is the result of the expression?';

/**
 * @returns {array}
 */
export const getNewRound = () => {
  const leftOperand = getRandomNumber(2, 15);
  const rightOperand = getRandomNumber(2, 10);
  const operator = getRandomOperator();
  const question = `${leftOperand} ${operator} ${rightOperand}`;
  const mathFunction = getFunctionByOperator(operator, MathOperators);
  const rightAnswer = calculate(leftOperand, rightOperand, mathFunction);
  return [question, rightAnswer.toString()];
};
