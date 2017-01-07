const greedySplit = require('../src');
const {expect} = require('chai');

describe('greedy-split', () => {
  it('should work with string', () => {
    expect(greedySplit('1|2|3|4', '|', 3)).to.eql(['1', '2', '3|4']);
  });

  it('should work with regex', () => {
    expect(greedySplit('1|2||3|4', /\|+/, 3)).to.eql(['1', '2', '3|4']);
  });
});
