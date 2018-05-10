/* eslint-disable prefer-arrow-callback */
const chai = require('chai');
const Candidate = require('../../models/Candidate');
const moment = require('moment');

const expect = chai.expect;

describe('Candidate', function () {
  it('does not blow up if no options supplied', function () {
    expect(new Candidate()).to.be.ok;
  });

  it('returns Unknown for firstname if none supplied', function () {
    const candidate = new Candidate();

    const expected = 'Unknown';
    const actual = candidate.firstName;

    expect(expected).to.be.equal(actual);
  });

  it('returns Unknown for lastname if none supplied', function () {
    const candidate = new Candidate();

    const expected = 'Unknown';
    const actual = candidate.lastName;

    expect(expected).to.be.equal(actual);
  });

  it('returns Unknown for location if none supplied', function () {
    const candidate = new Candidate();

    const expected = 'Unknown';
    const actual = candidate.location;

    expect(expected).to.be.equal(actual);
  });

  it('returns the correct string for fullName', function () {
    const candidate = new Candidate({ firstName: 'Joe', lastName: 'Bloggs' });

    const expected = 'Joe Bloggs';
    const actual = candidate.fullName;

    expect(expected).to.be.equal(actual);
  });

  it('returns the correct integer for age', function () {
    const dob = '1980-01-01';

    const candidate = new Candidate({ dateOfBirth: dob });

    const age = moment().diff(moment(dob), 'years');

    const expected = age;
    const actual = candidate.age;

    expect(expected).to.be.equal(actual);
  });

  it('returns the correct value for mostSkilled when no opts passed', function () {
    const candidate = new Candidate();

    const expected = [];
    const actual = candidate.mostSkilled;

    expect(expected.length).to.be.equal(actual.length);
  });

  it('returns the correct value for mostSkilled when skills passed', function () {
    const candidate = new Candidate({
      skills: [
        {
          term: 'php',
          yearsExperience: 5
        },
        {
          term: 'foo',
          yearsExperience: 2
        }
      ]
    });

    const expected = [{
      term: 'php',
      yearsExperience: 5
    }];

    const actual = candidate.mostSkilled;

    expect(expected).to.be.deep.equal(actual);
  });
});
