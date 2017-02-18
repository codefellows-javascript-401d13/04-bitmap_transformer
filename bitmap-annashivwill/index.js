'use strict';

const fs = require('fs');
const transformations = require(`${__dirname}/lib/transformations.js`);

fs.readFile(`${__dirname}/img/palette-bitmap.bmp`, function(err, data) {
  //// ERROR
  if (err) throw err;
  const bitmap = data;
  transformations.invert(bitmap);

});
