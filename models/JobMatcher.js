const Job = require('../models/Job');
const Candidate = require('../models/Candidate');

module.exports = class JobMatcher {
  constructor(opts = {}) {
    const { jobs = [], candidates = [] } = opts;

    this.candidates = candidates.map(item => new Candidate(item));
    this.jobs = jobs.map(item => new Job(item));
  }

  search(term) {
    return this.jobs.filter(job => job.skills.includes(term))
      .map(job => {
        job.candidates = this.candidates.filter(
          candidate => candidate.skills.map(
            skill => skill.term
          ).includes(term)
        );

        return job;
      });
  }
};
