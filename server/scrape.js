const fetch = require('node-fetch');
const cheerio = require('cheerio');

const scrapes = [];

function go() {
  return fetch(scrapes[0]).then(response => response.text());
}

if (scrapes.length) {
  go().then(body => {
    const $ = cheerio.load(body);
    $('h1').each((index, element) => {
      const h1 = $(element);
      console.log(h1.text());
    });
  });
} else {
  console.log('Nothing here to scrape');
}
