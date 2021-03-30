import { getRandomNumber, compareResultWithAnswer } from '../brain-even/brain-even.js';
import askUser from '../../cli/cli.js';

/**
 * @param {number} startNumber
 * @param {number} step
 * @param {number} rangeProgression
 * @returns {array}
 */
export const getProgression = (startNumber, step, rangeProgression) => {
  const iter = (firstValue, acc) => {
    if (acc.length === rangeProgression) {
      return acc;
    }
    acc.push(firstValue);
    return iter(firstValue + step, acc);
  };
  return iter(startNumber, []);
};

/**
 * @param {string} name
 * @param {number} countQuestions
 * @param {number} range
 */
const brainProgression = (name, countQuestions = 3, range = 10) => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < countQuestions; i += 1) {
    const progression = getProgression(getRandomNumber(), getRandomNumber(2, 5), range);
    const randomIndex = getRandomNumber(0, progression.length);
    const result = progression[randomIndex];
    progression[randomIndex] = '..';
    console.log(`Question: ${progression.join(' ')}`);
    const answer = askUser('Your answer: ');
    if (compareResultWithAnswer(result.toString(), answer)) {
      console.log('Correct !');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === countQuestions - 1) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};

export default brainProgression;
