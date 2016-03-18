'use strict';

const fs = require('fs');
const path = require('path');
const expect = require('chai').expect;
const nodom = require('../src/index');
const rootDir = path.dirname(fs.realpathSync(__filename));
const fixturesDir = path.join(rootDir, 'fixtures');
const resultsDir = path.join(rootDir, 'results');

function transform(file) {
  return nodom(path.join(fixturesDir, file));
}

function getResultString(file) {
  return fs.readFileSync(path.join(resultsDir, file), { encoding: 'utf8' });
}

function transformMatchesResult(file) {
  let trans = transform(file);
  let result = getResultString(file);
  return trans === result;
}

describe('nodom()', () => {

  it('exists', () => {
    expect(nodom).to.be.a('function');
  });

  it('returns a string', () => {
    let result = transform('one-line.js');
    expect(result).to.be.a('string');
  });

  describe('transformations', () => {
    fs.readdirSync(fixturesDir).forEach((fixture) => {
      it(`correctly matches ${fixture} to it's result file`, () => {
        expect(transformMatchesResult(fixture)).to.be.ok;
      });
    });
  });

});
