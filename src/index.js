import readlineSync from 'readline-sync';

/**
 * @param {object} game
 * @param {number} roundsCount
 */
export default (game, roundsCount = 3) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  const descriptionGame = game.description;
  console.log(descriptionGame);
  for (let i = 0; i < roundsCount; i += 1) {
    const expression = game.generateTask();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const normalizedAnswer = userAnswer.toLowerCase();
    const totalResultOfGame = game.playGame(expression, normalizedAnswer);
    if (totalResultOfGame !== 'Correct!') {
      console.log(totalResultOfGame);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === roundsCount - 1) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
    console.log(totalResultOfGame);
  }
};
