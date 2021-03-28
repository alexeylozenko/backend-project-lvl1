import { getRandomNumber } from '../brain-even/brain-even.js';
import askUser from '../cli/cli.js';

/**
 *
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 */
export const multiplication = (firstNumber, secondNumber) => firstNumber * secondNumber;

/**
 *
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 */
export const additional = (firstNumber, secondNumber) => firstNumber + secondNumber;

/**
 *
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @return {number}
 */
export const substraction = (firstNumber, secondNumber) => firstNumber - secondNumber;

/**
 *
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @param {function} operator
 */
const calculate = (firstNumber, secondNumber, operator) => operator(firstNumber, secondNumber);

/**
 *
 * @param {number} firstNumber
 * @param {number} secondNumber
 * @param {function} nameOperator
 * @return {string}
 */
export const toStringExpression = (firstNumber, secondNumber, nameOperator) => {
  let operator = '';
  if (nameOperator.name === 'multiplication') {
    operator = '*';
  }
  if (nameOperator.name === 'additional') {
    operator = '+';
  }
  if (nameOperator.name === 'substraction') {
    operator = '-';
  }
  return `${firstNumber} ${operator} ${secondNumber}`;
};

/**
 *
 * @param {number} rightResult
 * @param {string} answer
 * @return {boolean}
 */
const compareResultWithAnswer = (rightResult, answer) => {
  if (rightResult === Number.parseInt(answer, 10)) {
    return true;
  }
  return false;
};

const brainCalc = (name, countQuestions = 3) => {
  console.log('What is the result of the expression?');
  const listOfOperator = [multiplication, additional, substraction];

  for (let i = 0; i < countQuestions; i += 1) {
    const firstNumber = getRandomNumber(1, 21);
    const secondNumber = getRandomNumber(1, 15);
    const randomOperator = listOfOperator[getRandomNumber(0, listOfOperator.length)];
    const expression = toStringExpression(firstNumber, secondNumber, randomOperator);

    console.log(`Question: ${expression}`);
    const rightResult = calculate(firstNumber, secondNumber, randomOperator);
    const answer = askUser('Your answer: ');

    if (compareResultWithAnswer(rightResult, answer)) {
      console.log('Correct');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightResult}'`);
      console.log(`Let's try again, ${name}`);
      break;
    }
    if (i === countQuestions - 1) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainCalc;
