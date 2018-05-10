const moment = require('moment');

module.exports = class Candidate {
  constructor(opts = {}) {
    const {
      firstName = 'Unknown',
      lastName = 'Unknown',
      dateOfBirth,
      location = 'Unknown',
      skills = []
    } = opts;

    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = moment(dateOfBirth);
    this.location = location;
    this.skills = skills;
    this.fullName = this.getFullName();
    this.age = this.getAge();
    this.mostSkilled = this.getMostSkilled();
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  getAge() {
    return moment().diff(this.dateOfBirth, 'years');
  }

  getMostSkilled() {
    const mostYearsExperience = Math.max(...(this.skills.map(skill => skill.yearsExperience)));

    return this.skills.filter(skill => skill.yearsExperience === mostYearsExperience);
  }
};
