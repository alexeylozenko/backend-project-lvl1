import { isPrime } from '../brain-prime.js';

describe('brain-prime', () => {
  it('isPrime', () => {
    let number = 2;
    expect(isPrime(number)).toBe('yes');
    number = 3;
    expect(isPrime(number)).toBe('yes');
    number = 5;
    expect(isPrime(number)).toBe('yes');
    number = 7;
    expect(isPrime(number)).toBe('yes');
    number = 11;
    expect(isPrime(number)).toBe('yes');
    number = 13;
    expect(isPrime(number)).toBe('yes');
    number = 10;
    expect(isPrime(number)).toBe('no');
    number = 9;
    expect(isPrime(number)).toBe('no');
  });
});
