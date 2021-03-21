import { isEven, compareResultWithAnswer } from '../brain-even.js';

describe('brain-even', () => {
  it('isEven', () => {
    let number = 15;
    expect(isEven(number)).toBe('no');

    number = 14;
    expect(isEven(number)).toBe('yes');

    number = 0;
    expect(isEven()).toBe('yes');
  });

  it('compareResultWithAnswer', () => {
    let number = 14;
    let answer = 'yes';
    expect(compareResultWithAnswer(number, answer)).toBeTruthy();

    number = 13;
    answer = 'no';
    expect(compareResultWithAnswer(number, answer)).toBeTruthy();

    number = 13;
    answer = 'yes';
    expect(compareResultWithAnswer(number, 'yes')).toBeFalsy();

    number = 0;
    answer = 'no';
    expect(compareResultWithAnswer(number, answer)).toBeFalsy();
  });
});