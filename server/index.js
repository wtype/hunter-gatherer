const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    introduction: '፨ Hunter Gatherer is a web scraper based on user input ፨'
  })
});

const port = 9090;
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));