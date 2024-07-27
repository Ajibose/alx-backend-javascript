const { createServer } = require('http');
const countStudents = require('./3-read_file_async.js');

const app = createServer((req, resp) => {
  /* eslint-disable no-param-reassign */
  resp.writeHead(200, { 'Content-Type': 'text/plain' });
  if (resp.url === '/') {
    resp.write('Hello Holberton School!');
  } else if (resp.url === '/students') {
    resp.write('This is the list of our students');
    countStudents(database.csv);
  }
  resp.end();
  /* eslint-enable no-param-reassign */
});

app.listen(1245, '127.0.0.1', () => {});

module.exports = app;
