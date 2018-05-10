const moment = require('moment');

module.exports = class Job {
  constructor(opts = {}) {
    const {
      title = 'Unknown',
      skills = [],
      description,
      location = 'Unknown',
      created
    } = opts;

    this.title = title;
    this.skills = skills;
    this.description = description;
    this.location = location;
    this.created = moment(created);
    this.createdFormatted = this.getCreatedFormatted();
  }

  getCreatedFormatted() {
    return this.created.format('DD/MM/YYYY');
  }
};
