import { getInitials, isEmpty } from '../src/Utils/strmanip';

const testInputs = [
  ['Alin Mateizer', 'George Georgescu', 'John Doe', 'Michael Ballack'],
  ['', null, undefined, 'not empty'],
];

const expectedOutputs = [['AM', 'GG', 'JD', 'MB'], [true, true, true, false]];

const functions = [getInitials, isEmpty];

for (let i = 0; i < functions.length; i += 1) {
  let func = functions[i];
  test(`${func.name} function`, () => {
    let inps = testInputs[i];
    let exps = expectedOutputs[i];
    for (let j = 0; j < inps.length; j += 1) {
      expect(func(inps[j])).toBe(exps[j]);
    }
  });
}
