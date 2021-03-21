import readlineSync from 'readline-sync';

/**
 *
 * @param questionText
 * @return {string || boolean}
 */
export const askName = (questionText) => {
    const name = readlineSync.question(questionText);
    console.log(`Hello, ${name}`);
    return name;
};
