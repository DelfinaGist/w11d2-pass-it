const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1> 99 Bottles of beer on the wall</h1>
    <a href="/98">Take one down, pass it around</a>
  `);
});

app.get('/:number_of_bottles', (req, res) => {
  const num = req.params.number_of_bottles;
  res.send(`
    <h1>${num} Bottles of beer of the wall</h1>
    <a href="/${num <= 0 ? '' : num - 1}">${
    num <= 0 ? 'Start Over' : 'Take one down, pass it around'
  }</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});