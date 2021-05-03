/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
const getRandomNumber = (min = 1, max = 21) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue) + minValue);
};

export default getRandomNumber;
