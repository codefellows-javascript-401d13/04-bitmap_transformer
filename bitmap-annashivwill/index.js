'use strict';

const fs = require('fs');
const transformations = require(`${__dirname}/lib/transformations.js`);

// console.log(something.length);

fs.readFile(`${__dirname}/img/palette-bitmap.bmp`, function(err, data) {
  //// ERROR
  if (err) throw err;
  ///  CORRECT FILE PATH
  // Variable Defintions
  const bitmap = data;

  transformations.turnOrange(data);

  const bmp = {};
  bmp.bmphead = 14;
  bmp.dibstart = bitmap.readInt32LE(14);
  bmp.tablestart = bmp.bmphead + bmp.dibstart + 12; //12 is additional byte difference that we need to account for

  // Specific location Points
  bmp.colorpalette = bitmap.toString('hex', 54, bmp.tablestart + 1024);

});
