import { biggestDivider } from '../brain-gcd.js';

describe('brain-gcd', () => {
  it('greatestCommonDivisor', () => {
    let firstNumber = 17;
    expect(biggestDivider(firstNumber)).toBe(17);
    firstNumber = 15;
    expect(biggestDivider(firstNumber)).toBe(5);
    firstNumber = 20;
    expect(biggestDivider(firstNumber)).toBe(10);
    firstNumber = 11;
    expect(biggestDivider(firstNumber)).toBe(11);
    firstNumber = 7;
    expect(biggestDivider(firstNumber)).toBe(7);
    firstNumber = 8;
    expect(biggestDivider(firstNumber)).toBe(4);
  });
});
