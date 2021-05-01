import { getRandomNumber } from '../helpers.js';

/**
 * @param {number} initialValue
 * @param {number} step
 * @param {number} rangeProgression
 * @returns {array}
 */
const generateProgression = (initialValue, step, length = 10) => {
  const iter = (firstValue, acc) => {
    if (acc.length === length) {
      return acc;
    }
    acc.push(firstValue);
    return iter(firstValue + step, acc);
  };
  return iter(initialValue, []);
};

const game = {
  description: 'What number is missing in the progression?',
  getNewRound: () => {
    const step = getRandomNumber(2, 5);
    const startValue = getRandomNumber(2, 10);
    const progression = generateProgression(startValue, step);
    const index = getRandomNumber(1, progression.length - 1);
    const rightAnswer = progression[index];
    progression[index] = '..';
    const question = progression.join(' ');
    return [question, rightAnswer.toString()];
  },
};

export default game;
