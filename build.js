const nunjucks = require('nunjucks');
const fs = require('fs');

const htmlPath = './stage/index.html';

nunjucks.configure('.');
const htmlString = nunjucks.render('index.njk', { n: 1 });

fs.writeFile(htmlPath, htmlString, err => {
  return err
    ? console.log(`Error saving file: See exception (${err})`)
    : console.log('The file was saved successfully!');
});
