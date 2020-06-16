const fetch = require('node-fetch');
const cheerio = require('cheerio');

const scrapes = ['https://elliott.land'];

async function go() {
  if (!scrapes.length) return;
  try {
    const page = await fetch(scrapes[0]);
    const text = await page.text();
    const $ = cheerio.load(text);
    $('h1').each((index, element) => {
      const h1 = $(element);
      console.log(`${index + 1}: ${h1.text()}`);
    });
  } catch (error) {
    console.log('ERROR: ', error);
  }
}

module.exports = {
  go
};