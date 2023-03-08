const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log(req.body);
  res.send('Data received!');
});

app.listen(8080, () => {
  console.log('Server listening on port 8080');
});