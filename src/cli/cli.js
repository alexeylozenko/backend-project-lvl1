import readlineSync from 'readline-sync';

/**
 * @param {string} questionText
 * @return {string | boolean}
 */
export const askUser = (questionText) => readlineSync.question(questionText);

/**
 *
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export const getRandomNumber = (min = 1, max = 21) => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);
  return Math.floor(Math.random() * (maxValue - minValue) + minValue);
};

/**
 * @param {object} gameModule
 * @param {number} quantityQuestions
 */
export const runCLI = (gameModule, quantityQuestions = 3) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const descriptionGame = gameModule.getDescriptionGame();
  console.log(descriptionGame);

  for (let i = 0; i < quantityQuestions; i += 1) {
    const expression = gameModule.generateTask();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const normalizedAnswer = userAnswer.toLowerCase();
    const totalResultOfGame = gameModule.playGame(expression, normalizedAnswer);
    if (totalResultOfGame !== 'Correct!') {
      console.log(totalResultOfGame);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === quantityQuestions - 1) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    console.log(totalResultOfGame);
  }
};
