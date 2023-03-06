const http = require('http');

const server = http.createServer((req, res) => {
  const data = {
    message: 'Hello World!',
    timestamp: Date.now()
  };
  
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.write(JSON.stringify(data));
  res.end();
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});