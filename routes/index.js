const axios = require('axios');

const JobMatcher = require('../models/JobMatcher');

module.exports = async (req, res) => {
  const jobs = await axios.get('http://localhost:3000/jobs').then(response => response.data);
  const candidates = await axios.get('http://localhost:3000/candidates').then(response => response.data);

  const jobMatcher = new JobMatcher({ jobs, candidates });

  const jobMatchResults = jobMatcher.search(req.query.q || 'php');

  res.send(jobMatchResults);
};
