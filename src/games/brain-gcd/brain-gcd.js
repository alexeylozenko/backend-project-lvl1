import { compareResultWithAnswer, getRandomNumber } from '../brain-even/brain-even.js';
import { isPrime } from '../brain-prime/brain-prime.js';
import askUser from '../../cli/cli.js';

/**
 * @param {number} number
 * @returns {number}
 */
export const biggestDivider = (number) => {
  if (isPrime(number) === 'yes') return number;
  const iterDivider = (numberForDivide, divider) => {
    if (divider === 1) return numberForDivide;
    if (numberForDivide % divider === 0) return divider;
    return iterDivider(numberForDivide, divider - 1);
  };
  return iterDivider(number, number - 1);
};

/**
 * @param {number} firstNumber
 * @param {number} divider
 * @returns {number}
 */
const findSecondNumber = (firstNumber, divider) => {
  const iterNumber = (number, dividerOfNumber) => {
    if (number % dividerOfNumber === 0) return number;
    return iterNumber(number + 1, dividerOfNumber);
  };
  return iterNumber(firstNumber + 1, divider);
};

const brainGcd = (name, countQuestions = 3) => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < countQuestions; i += 1) {
    const firstNumber = getRandomNumber(2);
    const divider = biggestDivider(firstNumber);
    const secondNumber = findSecondNumber(firstNumber, divider);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const answer = askUser('Your answer: ');
    if (compareResultWithAnswer(divider.toString(), answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. ACorrect answer was '${divider}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === countQuestions - 1) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};

export default brainGcd;
