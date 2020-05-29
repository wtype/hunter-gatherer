const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors({
  origin: 'http://localhost:8080'
}));

app.use(express.json());

function isValid(input) {
  return (
    input &&
    input.length > 0 &&
    input.length < 50 &&
    Array.isArray(input) &&
    !input.some(Array.isArray)
  );
};

app.post('/search', (req, res) => {
  if (!isValid(req.body)) return;
  res.status(200).send({
    received: req.body
  });
});

app.get('/', (req, res) => {
  res.json({
    introduction: '፨ Hunter Gatherer is a web scraper based on user input ፨'
  })
});

const port = 9090;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));