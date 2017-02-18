'use strict';

const fs = require('fs');
const transformations = require(`${__dirname}/lib/transformations.js`);

fs.readFile(`${__dirname}/img/palette-bitmap.bmp`, function(err, data) {
  if (err) throw err;
  const bitmap = data;

  fs.writeFile(`${__dirname}/img/inverted.bmp`, transformations.invert(bitmap), function(err, data) {
    console.log('invert: ', transformations.invert(bitmap)[70]);
    if (err) throw err;
  });

  fs.writeFile(`${__dirname}/img/black.bmp`, transformations.turnBlack(bitmap), function(err, data) {
    console.log('black: ', transformations.turnBlack(bitmap)[70]);
    if (err) throw err;
  });

});
