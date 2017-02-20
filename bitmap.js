'use strict'; 

const fileHelper = require('./lib/bitmap-file-helper.js');
const Bitmap = require('./model/bitmap-constructor.js');


let filesToConvert = [`${__dirname}/img/palette-bitmap.bmp`, `${__dirname}/img/optimus-prime.bmp`];
transformBMP(filesToConvert);

function transformBMP(files) {
  let colorTransforms = [];
  if (process.argv.length > 2) {
    for (let i = 2; i < process.argv.length; i++) {
      if (Bitmap.colorTransforms.includes(process.argv[i])) {
        colorTransforms.push(process.argv[i]);
      }
    }
    return fileColorTransform(files, colorTransforms);

  }
  colorTransforms = ['invertTransform', 'grayTransform', 'blueTransform'];

  return fileColorTransform(files, colorTransforms);


  function fileColorTransform(files, colorTransforms) {
    files.forEach( file => {
      colorTransforms.forEach(transform => {
        fileHelper(file, getShortFilename(file), transform);
      });
    });
  }
}

function getShortFilename(fullPath) {
  let filename = fullPath.slice(fullPath.lastIndexOf('/') + 1, fullPath.indexOf('.bmp'));

  return filename;
}
