const expect = require('chai').expect;
const nodom = require('../src/index');

describe('nodom()', () => {

  it('exists', () => {
    expect(nodom).to.be.a('function');
  });

});
