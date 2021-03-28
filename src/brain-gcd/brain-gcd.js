import { compareResultWithAnswer, getRandomNumber } from '../brain-even/brain-even.js';
import askUser from '../cli/cli.js';
/**
 * @param {number} number
 * @returns {number}
 */
export const greatestCommonDivisor = (number) => {
  const iterDivider = (numberForDivide, divider) => {
    if (divider === 1) return numberForDivide;
    if (numberForDivide % divider === 0) return divider;
    return iterDivider(numberForDivide, divider - 1);
  };
  return iterDivider(number, number - 1);
};

const brainGcd = (name, countQuestions = 3) => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < countQuestions; i += 1) {
    const firstNumber = getRandomNumber();
    const divider = greatestCommonDivisor(firstNumber);
    const secondNumber = divider * getRandomNumber(2, 5);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const answer = askUser('Your answer: ');
    if (compareResultWithAnswer(divider.toString(), answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${divider}'.`);
      break;
    }
    if (i === countQuestions - 1) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};

export default brainGcd;
