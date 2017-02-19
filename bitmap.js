'use strict';

const fileHelper = require('./lib/bitmap-file-helper.js');
const Bitmap = require('./model/bitmap-constructor.js');

transformBMP();

function transformBMP() {
  // let filesToConvert = [];
  if (process.argv.length > 2) {
    for (let i = 2; i < process.argv.length; i++) {
      if (Bitmap.colorTransforms.includes(process.argv[i])) {

        fileHelper(`${__dirname}/img/palette-bitmap.bmp`, 'palette', process.argv[i]);
      }
    }
    return;
  }
  fileHelper(`${__dirname}/img/palette-bitmap.bmp`, 'palette', 'invertTransform');
  fileHelper(`${__dirname}/img/palette-bitmap.bmp`, 'palette', 'grayTransform');
  fileHelper(`${__dirname}/img/palette-bitmap.bmp`, 'palette', 'blueTransform');
}
// function transformBMP() {
//   // let filesToConvert = [];
//   if (process.argv.length > 2) {
//     for (let i = 2; i < process.argv.length; i++) {
//       if (Bitmap.colorTransforms.includes(process.argv[i])) {
//
//         fileHelper(`${__dirname}/img/palette-bitmap.bmp`, 'palette', process.argv[i]);
//       }
//     }
//     return;
//   }
//   fileHelper(`${__dirname}/img/palette-bitmap.bmp`, 'palette', 'invertTransform');
//   fileHelper(`${__dirname}/img/palette-bitmap.bmp`, 'palette', 'grayTransform');
//   fileHelper(`${__dirname}/img/palette-bitmap.bmp`, 'palette', 'blueTransform');
// }
