module.exports = (req, res) => {
  res.json([
    {
      firstName: 'Joe',
      lastName: 'Bloggs',
      dateOfBirth: '1978-03-01',
      location: 'London',
      skills: [
        {
          term: 'php',
          yearsExperience: 5
        },
        {
          term: 'html',
          yearsExperience: 10
        },
        {
          term: 'css',
          yearsExperience: 10
        },
        {
          term: 'javascript',
          yearsExperience: 9
        }
      ]
    },
    {
      firstName: 'Amber',
      lastName: 'Smith',
      dateOfBirth: '1982-05-20',
      location: 'Sheffield',
      skills: [
        {
          term: 'java',
          yearsExperience: 9
        },
        {
          term: 'oracle',
          yearsExperience: 6
        }
      ]
    }
  ]);
};
