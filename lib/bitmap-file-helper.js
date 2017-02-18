'use strict';

const fs = require('fs');
const Bitmap = require('../model/bitmap-constructor.js');

const imgReader = module.exports = function(imgPath, transform, newfile){ //eslint-disable-line
  fs.readFile(imgPath, function(err, data){
    if(err) throw err;
    var bit = new Bitmap(data);

    let transformsArray = ['invertTransform', 'grayTransform', 'blueTransform'];

    transformBitmap(transformsArray, function(err){
      if(err) throw err;
      console.log('wrote the file.');
    });

    function transformBitmap(transforms, callback) {
      transforms.forEach( transform => {
        let string = bit.head + Bitmap.colorMapToString(bit.transformPixel(Bitmap[transform])) + bit.pixel;
        let buffer = Buffer.from(string, 'hex');
        fs.writeFile(`${__dirname}/../img/${newfile}-${transform}.bmp`, buffer, callback(err));
      });
    }
  });
};
