/* eslint-disable prefer-arrow-callback */
const chai = require('chai');
const Job = require('../../models/Job');
const moment = require('moment');

const expect = chai.expect;

describe('Job', function () {
  it('does not blow up if no options supplied', function () {
    expect(new Job()).to.be.ok;
  });

  it('returns Unknown for title if none supplied', function () {
    const job = new Job();

    const expected = 'Unknown';
    const actual = job.title;

    expect(expected).to.be.equal(actual);
  });

  it('returns Unknown for location if none supplied', function () {
    const job = new Job();

    const expected = 'Unknown';
    const actual = job.location;

    expect(expected).to.be.equal(actual);
  });

  it('returns today as a formatted date if no created date supplied', function () {
    const job = new Job();

    const dateFormatString = 'DD/MM/YYYY';

    const expected = moment().format(dateFormatString);
    const actual = job.createdFormatted;

    expect(expected).to.be.equal(actual);
  });

  it('returns a formatted date string in the expected format', function () {
    const job = new Job({ created: '2018-01-01T12:00:00' });

    const expected = '01/01/2018';
    const actual = job.createdFormatted;

    expect(expected).to.be.equal(actual);
  });
});

