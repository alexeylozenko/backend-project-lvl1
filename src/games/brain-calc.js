import { getRandomNumber } from '../helpers.js';

/**
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 */
export const multiplication = (firstNumber, secondNumber) => firstNumber * secondNumber;

/**
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 */
export const additional = (firstNumber, secondNumber) => firstNumber + secondNumber;

/**
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 */
export const substraction = (firstNumber, secondNumber) => firstNumber - secondNumber;

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
  const randomIndexOfOperators = getRandomNumber(0, operators.length - 1);
  return operators[randomIndexOfOperators][0];
};

/**
 *
 * @param {string} operator
 * @param {array} operators
 * @returns {boolean}
 */
const isOperator = (operator, operators) => {
  const iteratorOfOperators = (currOperator, index, allOperators) => {
    if (allOperators.length === index) {
      return false;
    }
    if (allOperators[index].includes(currOperator)) {
      return currOperator;
    }
    return iteratorOfOperators(currOperator, index + 1, allOperators);
  };
  return iteratorOfOperators(operator, 0, operators);
};

/**
 * @returns {string}
 */
export const generateTask = () => {
  const firstNumber = getRandomNumber(2, 15);
  const secondNumber = getRandomNumber(2, 10);
  const operator = getRandomOperator(MathOperators);
  return `${firstNumber} ${operator} ${secondNumber}`;
};

/**
 *
 * @returns {string}
 */
export const description = 'What is the result of the expression?';

/**
 *
 * @param {string} expression
 * @returns {string}
 */
const parseOperator = (expression, operators) => {
  const iterOperands = (expr, index, allOperators) => {
    if (expr.length === index) {
      return false;
    }
    if (isOperator(expr[index], allOperators)) {
      return expr[index];
    }
    return iterOperands(expr, index + 1, allOperators);
  };
  const operands = expression.split('');
  return iterOperands(operands, 0, operators);
};

/**
 * @param {string} expression
 * @returns {array}
 */
export const parseExpression = (expression, operators) => {
  const clearExpression = expression.replace(/ /g, '');
  const operator = parseOperator(clearExpression, operators);
  const functionByOperator = getFunctionByOperator(operator, operators);
  const [firstNumber, secondNumber] = clearExpression.split(operator);
  const firstParsedNumber = parseFloat(firstNumber);
  const secondParsedNumber = parseFloat(secondNumber);
  return [firstParsedNumber, secondParsedNumber, functionByOperator];
};

export const playGame = (expression, userAnswer) => {
  const [firstNumber, secondNumber, operator] = parseExpression(expression, MathOperators);
  const rightAnswer = calculate(firstNumber, secondNumber, operator);
  const parsedUserAnswer = parseFloat(userAnswer);
  return (rightAnswer === parsedUserAnswer)
    ? 'Correct!'
    : `'${parsedUserAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
};
