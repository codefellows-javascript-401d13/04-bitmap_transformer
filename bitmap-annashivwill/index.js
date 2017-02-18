'use strict';

const fs = require('fs');
const transformations = require(`${__dirname}/lib/transformations.js`);

fs.readFile(`${__dirname}/img/palette-bitmap.bmp`, function(err, data) {
  if (err) throw err;
  const bitmap = data;
  transformations.invert(bitmap);
  transformations.turnBlack(bitmap);

  fs.writeFile(`${__dirname}/img/inverted.bmp`, data, function(err, data) {
    if (err) throw err;
  });

  fs.writeFile(`${__dirname}/img/black.bmp`, data, function(err, data) {
    if (err) throw err;
  });
});
