/*

Task

Using a public api or local json files, get data from 2 or more endpoints and then
merge and filter the results.

- Please provide the full solution.
- Use vanilla JavaScript or a framework
- We are particularly interested in seeing use of tES6 methods.

*/

const express = require('express');

const jobs = require('./routes/jobs');
const candidates = require('./routes/candidates');
const index = require('./routes/index');

const app = express();

app.get('/', index);
app.get('/jobs', jobs);
app.get('/candidates', candidates);

app.listen(3000, () => console.log('visit http://localhost:3000'));
