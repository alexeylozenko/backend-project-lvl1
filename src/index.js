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
    const [expression, rightAnswer] = game.playGame();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const normalizedUserAnswer = userAnswer.toLowerCase();
    if (rightAnswer !== normalizedUserAnswer) {
      console.log(`'${normalizedUserAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log(`Correct!`);
  }
  console.log(`Congratulations, ${name}!`);
};
