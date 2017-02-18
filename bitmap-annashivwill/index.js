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

// ========= Will's Work ============
  // Bitmap into string
  var bitmapString = bitmap.toString('hex')

  // Grab color table
  const colorpalette = bitmapString.slice(108, 2156);

  // Turn table black and save to Buffer String
  bitmapString = bitmapString.replace(colorpalette, (transformations.invert(colorpalette)));

  // console.log(bitmapString.slice(108, 2156));

  // Change back into Buffer
  const newBuffer = Buffer.from(bitmapString, 'hex');

  // Export new img
  // transformations.exportImg(newBuffer);


// ==================================


  const start = 14 + bitmap.readInt32LE(14);
  const stop = 1078;
  // console.log((bitmap.toString('hex', start, stop)).length);

  // const bmp = {};
  // bmp.bmphead = 14;
  // bmp.dibstart = bitmap.readInt32LE(14);
  // bmp.tablestart = bmp.bmphead + bmp.dibstart + 12; //12 is additional byte difference that we need to account for

  // Specific location Points
  // bmp.colorpalette = bitmap.toString('hex', 54, bmp.tablestart + 1024);

});



// bitmapString = bitmap.toString
// colorpalette = bitmapString.slice(108, 2048);
// turnBlack(colorpalette);
// bitmapString.replace( colorpalette, turnBlack(colorpalette);
