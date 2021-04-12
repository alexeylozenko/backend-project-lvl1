import { getRandomNumber } from '../cli/cli.js';
import readlineSync from 'readline-sync';

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
const calculate = (firstNumber, secondNumber, operator) => {
  if (
    isValidNumber(firstNumber) && 
    isValidNumber(secondNumber) && 
    isOperator(operator)
    ) {
      return operator(firstNumber, secondNumber);
    }
};

const operators = [
  ['*', multiplication],
  ['+', additional],
  ['-', substraction]
];

/**
 * 
 * @param {string} operator 
 * @param {array} operators 
 * @returns {function}
 */
const getFunctionByOperator = (operator, operators) => {
  const iteratorOfOperators = (operator, operators, index) => {
    if (index === operators.length) {
      return null;
    }
    if(operator === operators[index][0]) {
      return operators[index][1];
    }
    return iteratorOfOperators(operator, operators, index + 1);
  }

  return iteratorOfOperators(operator, operators, 0);
}

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
  const iteratorOfOperators = (operator, operators, index) => {
    if (index === operators.length) {
      return false;
    }
    if (operators[index].includes(operator)) {
      return true;
    }

    return iteratorOfOperators(operator, operators, index += 1);
  }
  return iteratorOfOperators(operator, operators, 0);
};

/**
 * @returns {string}
 */
 export const generateTask = () => {
  const firstNumber = getRandomNumber(2, 20);
  const secondNumber = getRandomNumber(2, 10);
  const operator = getRandomOperator(operators);
  return `${firstNumber} ${operator} ${secondNumber}`;
};

/**
 * 
 * @returns {string}
 */
 export const getDescriptionGame = () => 'What is the result of the expression?';

/**
 * @param {string} expression 
 * @returns {array}
 */
export const parseExpression = (expression, operators) => {
  const clearExpression = expression.replace(/ /g, '');
  const operator = parseOperator(clearExpression, operators);
  const [firstNumber, secondNumber] = clearExpression.split(operator);
  const functionByOperator = getFunctionByOperator(operator, operators);

  return [
    Number.parseInt(firstNumber), 
    Number.parseInt(secondNumber), 
    functionByOperator
  ];
};

/**
 * 
 * @param {string} expression 
 * @returns {array}
 */
 const parseOperator = (expression, operators) => {
  const operator = expression.split('').filter(
    (char) => { return isOperator(char, operators) }
  );
  return operator.toString();
};

export const playGame = (expression, userAnswer) => {
  const [firstNumber, secondNumber, operator] = parseExpression(expression, operators);
  const rightAnswer = calculate(firstNumber, secondNumber, operator);
  const parsedUserAnswer = Number.parseInt(userAnswer);
  return (rightAnswer === parsedUserAnswer) ?
    'Correct!' :
    `'${parsedUserAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`;
};
