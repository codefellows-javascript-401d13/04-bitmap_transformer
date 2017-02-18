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
  console.log('entire bitmap:', bitmapString.length);

  // Grab color table
  const colorpalette = bitmapString.slice(108, 2156);
  console.log('original color palette', colorpalette.length);

  // Turn table black and save to Buffer String
  bitmapString = bitmapString.replace(colorpalette, (transformations.invert(colorpalette)));
  console.log(bitmapString.length);
  // console.log(bitmapString.slice(108, 2156));

  // Change back into Buffer
  const newBuffer = Buffer.from(bitmapString, 'hex');

  // Export new img
  transformations.exportImg(newBuffer);


// ==================================


  const start = 14 + bitmap.readInt32LE(14);
  const stop = 1078;


});
