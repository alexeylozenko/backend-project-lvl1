import readlineSync from 'readline-sync';

/**
 * @param {object} gameModule
 * @param {number} quantityQuestions
 */
export default (gameModule, quantityQuestions = 3) => {
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
