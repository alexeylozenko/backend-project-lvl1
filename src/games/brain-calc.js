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

const MathOperators = {
  '*': multiplication,
  '+': additional,
  '-': substraction,
};

const game = {
  description: 'What is the result of the expression?',
  getNewRound: () => {
    const leftOperand = getRandomNumber(2, 15);
    const rightOperand = getRandomNumber(2, 10);
    const operators = Object.keys(MathOperators);
    const index = getRandomNumber(0, operators.length - 1);
    const operator = operators[index];
    const question = `${leftOperand} ${operator} ${rightOperand}`;
    const rightAnswer = calculate(leftOperand, rightOperand, MathOperators[operator]);
    return [question, rightAnswer.toString()];
  },
};

export default game;
