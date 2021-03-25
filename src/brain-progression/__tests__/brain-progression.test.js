import { getProgression } from '../brain-progression.js';

describe('brain-progression', () => {
  it('getProgression', () => {
    let firstNumber = 4;
    let step = 3;
    let rangeOfProgression = 10;
    let result = [4, 7, 10, 13, 16, 19, 22, 25, 28, 31];
    expect(getProgression(firstNumber, step, rangeOfProgression)).toEqual(result);

    firstNumber = 3;
    step = 2;
    rangeOfProgression = 10;
    result = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21];
    expect(getProgression(firstNumber, step, rangeOfProgression)).toEqual(result);

    firstNumber = 2;
    step = 4;
    rangeOfProgression = 10;
    result = [2, 6, 10, 14, 18, 22, 26, 30, 34, 38];
    expect(getProgression(firstNumber, step, rangeOfProgression)).toEqual(result);
  });
});
