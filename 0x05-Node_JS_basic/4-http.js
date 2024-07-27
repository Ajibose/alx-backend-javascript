const { createServer } = require('http');

const app = createServer((req, resp) => {
  /* eslint-disable no-param-reassign */
  resp.statusCode = 200;
  resp.setHeader('Content-Type', 'text/plain');
  //resp.end('Hello Holberton School!');
  resp.end('Hello Holberton School!');
  /* eslint-enable no-param-reassign */
});

app.listen(1245, '127.0.0.1', () => {});

module.exports = app;
