/* eslint-disable prefer-arrow-callback */
const chai = require('chai');
const JobMatcher = require('../../models/JobMatcher');

const expect = chai.expect;

describe('JobMatcher', function () {
  it('does not blow up if no options supplied', function () {
    expect(new JobMatcher()).to.be.ok;
  });

  describe('search', function () {
    it('does not blow up if no term supplied', function () {
      const jobMatcher = new JobMatcher();

      const actual = jobMatcher.search();

      expect(actual).to.be.ok;
    });

    it('returns the correct value', function () {
      const jobMatcher = new JobMatcher({
        candidates: [
          {
            firstName: 'Candidate 1',
            skills: [ { term: 'php' }, { term: 'html' } ]
          },
          {
            firstName: 'Candidate 2',
            skills: [ { term: 'java' }, { term: 'oracle' } ]
          }
        ],
        jobs: [
          { title: 'Job 1', skills: [ 'php', 'zend', 'html' ] },
          { title: 'Job 2', skills: [ 'node', 'express' ] },
          { title: 'Job 3', skills: [ 'oracle', 'java' ] }
        ]
      });

      const actual = jobMatcher.search('oracle');

      expect(actual.length).to.be.equal(1);
      expect(actual[0].title).to.be.equal('Job 3');
      expect(actual[0].candidates[0].firstName).to.be.equal('Candidate 2');
    });
  });
});

