import askUser from '../cli/cli.js';

/**
 *
 * @param {number}number
 * @return {string}
 */
export const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};
/**
 *
 * @param {string} result
 * @param {string} answer
 * @return {boolean}
 */
export const compareResultWithAnswer = (result, answer) => {
  if (result === answer.toLowerCase()) {
    return true;
  }
  return false;
};

/**
 *
 * @param {number} rangeNumber
 * @return {number}
 */
const getRandomNumber = (rangeNumber = 20) => Math.floor(Math.random() * rangeNumber);

const brainEven = (name, countQuestions = 3) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < countQuestions; i += 1) {
    const randomNumber = getRandomNumber();

    console.log(`Question: ${randomNumber}`);
    const answer = askUser('Your answer: ');
    const rightResult = isEven(randomNumber);

    if (compareResultWithAnswer(rightResult, answer)) {
      console.log('Correct !');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightResult}'`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === countQuestions - 1) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};

export default brainEven;
