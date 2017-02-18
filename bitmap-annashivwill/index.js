'use strict';

const fs = require('fs');
const transformations = require(`${__dirname}/lib/transformations.js`);

fs.readFile(`${__dirname}/img/palette-bitmap.bmp`, function(err, data) {
  if (err) throw err;
  const bitmap = data;
  transformations.invert(bitmap);

  fs.writeFile(`${__dirname}/img/transformed.bmp`, data, function(err, data) {
    if (err) throw err;
    console.log('write file msg:', 'new file created');
  });
});
