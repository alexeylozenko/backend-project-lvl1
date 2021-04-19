import { getRandomNumber, isNumber } from '../helpers.js';

/**
 * @param {number} startNumber
 * @param {number} step
 * @param {number} rangeProgression
 * @returns {array}
 */
export const generateProgression = (startNumber, step, rangeProgression = 10) => {
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
 *
 * @param {array} array
 * @returns {array}
 */
const hideOneRandomElement = (array) => {
  const arr = array;
  const index = getRandomNumber(2, array.length - 1);
  arr[index] = '..';
  return arr;
};

/**
 * @returns {string}
 */
export const generateTask = () => {
  const step = getRandomNumber(2, 5);
  const startNumber = getRandomNumber(2, 10);
  const progression = generateProgression(startNumber, step);
  return hideOneRandomElement(progression).toString().replace(/,/g, ' ');
};

/**
 *
 * @returns {string}
 */
export const description = 'What number is missing in the progression?';

/**
 *
 * @param {string} expression
 * @returns {array}
 */
const normalizeExpression = (expression) => {
  const convertedExpression = expression.split(' ');
  const iter = (index, array) => {
    const arr = array;
    if (index === array.length) {
      return array;
    }
    const convertedToNumber = parseFloat(array[index]);
    if (isNumber(convertedToNumber)) {
      arr[index] = convertedToNumber;
    }
    return iter(index + 1, array);
  };
  return iter(0, convertedExpression);
};

/**
 *
 * @param {string} expression
 * @param {function} parserFunction
 * @returns {array}
 */
const parseExpression = (expression, parserFunction) => parserFunction(expression);

/**
 *
 * @param {array} progression
 * @returns {number}
 */
export const findStepProgression = (progression) => {
  // const iter = (currentElement, index, array) => {
  //   if (index === array.length) {
  //     return 0;
  //   }
  //   const nextElement = array[index + 1];
  //   if (isNumber(currentElement) && isNumber(nextElement)) {
  //     return nextElement - currentElement;
  //   }
  //   return iter(array[index + 1], index += 1, array);
  // };
  // return iter(progression[0], 0, progression);

  const iter = (index, array) => {
    if (index === array.length) {
      return null;
    }
    const currElement = array[index];
    const nextElement = array[index + 1];
    if (isNumber(currElement) && isNumber(nextElement)) {
      return nextElement - currElement;
    }
    return iter(index + 1, array);
  };
  return iter(0, progression);
};

/**
 *
 * @param {array} array
 * @param {number} step
 * @returns {number}
 */
export const findMissingNumber = (array, step) => {
  const indexMissingNumber = array.indexOf('..');

  if (indexMissingNumber === 0) {
    const nextElement = array[indexMissingNumber + 1];
    return nextElement - step;
  }
  const previousElement = array[indexMissingNumber - 1];
  return previousElement + step;
};

/**
 *
 * @param {string} expression
 * @param {string} answerUser
 * @returns {string}
 */
export const playGame = () => {
  const expression = generateTask();
  const parsedExpression = parseExpression(expression, normalizeExpression);
  const step = findStepProgression(parsedExpression);
  const missedNumber = findMissingNumber(parsedExpression, step);
  const rightAnswer = missedNumber.toString();
  return [expression, rightAnswer];
};
