Zone Digital Code test
======================

I have created a simple example of getting two API endpoints, and merging and filtering the results.

It is based on the concept of a backend Job board API, where there are Jobs and Candidates, and the app returns a JSON response of jobs which match a particular skill requirement. Each job returned contains a list of suitable candidates for that job.

* * *

Programmed with Node 9.2.0

Install
-------

    nvm use 9.2.0 (If using nvm)
    npm install


Running
-------

    npm start

Once started visit http://localhost:3000

Additional features
-------------------

You can use a query string param 'q' to change the search term e.g. http://localhost:3000/q?=oracle

Linting
-------

    npm run lint


Tests
-----

    npm run test


Code questions
--------------

Answers to questions in questions.txt file
