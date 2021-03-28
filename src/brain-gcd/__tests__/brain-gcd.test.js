import { greatestCommonDivisor } from '../brain-gcd.js';

describe('brain-gcd', () => {
  it('greatestCommonDivisor', () => {
    let firstNumber = 17;
    expect(greatestCommonDivisor(firstNumber)).toBe(17);
    firstNumber = 15;
    expect(greatestCommonDivisor(firstNumber)).toBe(5);
    firstNumber = 20;
    expect(greatestCommonDivisor(firstNumber)).toBe(10);
    firstNumber = 11;
    expect(greatestCommonDivisor(firstNumber)).toBe(11);
    firstNumber = 7;
    expect(greatestCommonDivisor(firstNumber)).toBe(7);
    firstNumber = 8;
    expect(greatestCommonDivisor(firstNumber)).toBe(4);
  });
});
