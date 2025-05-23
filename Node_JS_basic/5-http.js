const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    let responseText = 'This is the list of our students\n';
    try {
      await countStudents(process.argv[2])
        .then(() => {
          res.end(responseText);
        })
        .catch((error) => {
          responseText += error.message;
          res.end(responseText);
        });
    } catch (error) {
      responseText += 'Cannot load the database';
      res.end(responseText);
    }
  }
});

app.listen(1245);

module.exports = app;