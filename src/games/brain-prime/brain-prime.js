import { compareResultWithAnswer, getRandomNumber } from '../brain-even/brain-even.js';
import askUser from '../../cli/cli.js';
/**
 * @param number
 * @returns {string}
 */
export const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return 'no';
  }
  return 'yes';
};

const brainPrime = (name, countQuestion = 3) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < countQuestion; i += 1) {
    const randomNumber = getRandomNumber();
    console.log(`Question: ${randomNumber}`);
    const answer = askUser('Your answer: ');
    if (compareResultWithAnswer(isPrime(randomNumber), answer)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime(randomNumber)}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === countQuestion - 1) {
      console.log(`Congratulations, ${name}!`);
      break;
    }
  }
};

export default brainPrime;
