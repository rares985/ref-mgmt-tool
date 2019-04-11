import { toRomanNumeral } from '../src/Utils/misc';

const testInputs = [1, 4, 5, 10, 14, 15, 49, 50, 54, 55, 100, 500, 1000];
const expectedOutputs = ['I', 'IV', 'V', 'X', 'XIV', 'XV', 'XLIX', 'L', 'LIV', 'LV', 'C', 'D', 'M'];

test('toRomanNumeral function', () => {
  for (let i = 0; i < testInputs.length; i += 1) {
    expect(toRomanNumeral(testInputs[i])).toBe(expectedOutputs[i]);
  }
});
