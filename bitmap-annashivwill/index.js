'use strict';

const fs = require('fs');

console.log(something.length);

fs.readFile(`${__dirname}/img/palette-bitmap.bmp`, function(err, data) {
  //// ERROR
  if (err) throw err;

  ///  CORRECT FILE PATH
  // Variable Defintions
  const bitmap = data;
  const bmp = {};
  bmp.bmphead = 14;
  bmp.dibstart = bitmap.readInt32LE(14);
  bmp.tablestart = bmp.bmphead + bmp.dibstart + 12; //12 is additional byte difference that we need to account for

  // Specific location Points
  bmp.colorpalette = bitmap.toString('hex', 54, bmp.tablestart + 1024);
  console.log(bmp.colorpalette);
  // console.log(typeof(bitmap));

  // console.log('buffer data bitmap', bitmap);
});
