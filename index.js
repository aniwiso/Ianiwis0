const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.end('До встречи!');
});

server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
