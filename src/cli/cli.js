import readlineSync from 'readline-sync';
/**
 *
 * @param questionText
 * @return {string | boolean}
 */
const askUser = (questionText) => readlineSync.question(questionText);
export default askUser;
