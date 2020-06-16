const fetch = require('node-fetch');
const cheerio = require('cheerio');

const scrapes = ['https://elliott.land'];
const results = [];

async function go() {
  if (!scrapes.length) return;
  try {
    const page = await fetch(scrapes[0]);
    const text = await page.text();
    const $ = cheerio.load(text);
    $('h1').each((index, element) => {
      const h1 = $(element);
      const text = h1.text();
      results.push(text);
    });
    return results;
  } catch (error) {
    console.log('ERROR: ', error);
  }
}

module.exports = {
  go,
};
