import {
  multiplication,
  additional,
  substraction,
} from '../brain-calc.js';

describe('brain-calc', () => {
  it('multiplication', () => {
    let firstNumber = 6;
    let secondNumber = 10;
    expect(multiplication(firstNumber, secondNumber)).toBe(60);

    firstNumber = 2;
    secondNumber = 5;
    expect(multiplication(firstNumber, secondNumber)).toBe(10);

    firstNumber = 0;
    secondNumber = 5;
    expect(multiplication(firstNumber, secondNumber)).toBe(0);

    firstNumber = -2;
    secondNumber = 5;
    expect(multiplication(firstNumber, secondNumber)).toBe(-10);
  });

  it('addition', () => {
    let firstNumber = 14;
    let secondNumber = 4;
    expect(additional(firstNumber, secondNumber)).toBe(18);

    firstNumber = 10;
    secondNumber = -5;
    expect(additional(firstNumber, secondNumber)).toBe(5);

    firstNumber = 0;
    secondNumber = -5;
    expect(additional(firstNumber, secondNumber)).toBe(-5);
  });

  it('substraction', () => {
    let firstNumber = 20;
    let secondNumber = 15;
    expect(substraction(firstNumber, secondNumber)).toBe(5);

    firstNumber = -20;
    secondNumber = 15;
    expect(substraction(firstNumber, secondNumber)).toBe(-35);

    firstNumber = 0;
    secondNumber = 5;
    expect(substraction(firstNumber, secondNumber)).toBe(-5);

    firstNumber = 10;
    secondNumber = -5;
    expect(substraction(firstNumber, secondNumber)).toBe(15);
  });
});
