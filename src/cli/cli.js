import readlineSync from 'readline-sync';

/**
 *
 * @param questionText
 * @return {string | boolean}
 */
const askUser = (questionText) => readlineSync.question(questionText);
export default askUser;

/**
 * @param {string} textGreetings
 * @returns {string|boolean}
 */
export const greetingsGame = (textGreetings = 'Welcome to the Brain Games!') => {
  console.log(textGreetings);
  const name = askUser('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};
