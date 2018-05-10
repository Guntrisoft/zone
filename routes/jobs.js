module.exports = (req, res) => {
  res.json([
    {
      title: 'Senior PHP developer',
      skills: [
        'php',
        'zend',
        'html',
        'css',
        'javascript',
        'scss',
        'orm',
        'mysql'
      ],
      description: 'This is a great job doing PHP programming',
      location: 'London',
      created: '2018-04-24T10:00:00+0100'
    },
    {
      title: 'Junior Node developer',
      skills: [
        'node',
        'express',
        'javascript',
        'html',
        'css',
        'mongodb',
        'elasticsearch'
      ],
      description: 'An amazing opportunity to get into JS programming',
      location: 'London',
      created: '2018-04-27T15:00:00+0100'
    },
    {
      title: 'Oracle DBA',
      skills: [
        'oracle',
        'java',
        'linux'
      ],
      description: 'If you have great Oracle skills, apply now!',
      location: 'Newcastle',
      created: '2018-04-22T18:00:00+0100'
    }
  ]);
};
