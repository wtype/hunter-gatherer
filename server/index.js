const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const scraper = require('./scrape');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:8080',
  })
);

function isValid(input) {
  return (
    input &&
    input.length > 0 &&
    input.length < 50 &&
    Array.isArray(input) &&
    !input.some(Array.isArray)
  );
}

app.post('/search', async (req, res) => {
  if (!isValid(req.body)) return;
  console.log(`Input: ${req.body}`);
  // TODO: pass data and scrape properly
  scraper.go().then(console.log);

  res.status(200).send({
    received: req.body,
  });
});

app.get('/', (req, res) => {
  res.json({
    introduction: '፨ Hunter Gatherer is a web scraper based on user input ፨',
  });
});

const port = 9090;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
