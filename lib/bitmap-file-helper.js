'use strict';

const fs = require('fs');
const Bitmap = require('../model/bitmap-constructor.js');

const imgReader = module.exports = function(imgPath, newfile, transform, callback){ //eslint-disable-line
  fs.readFile(imgPath, function(err, data){
    if(err) return callback(err);
    var bit = new Bitmap(data);
    let string = bit.head + Bitmap.colorMapToString(bit.transformPixel(Bitmap[transform])) + bit.pixel;
    let buffer = Buffer.from(string, 'hex');
    fs.writeFile(`${__dirname}/../img/${newfile}-${transform}.bmp`, buffer, function(err){
      if(err) return callback(err);
      console.log('wrote the file.');
      if(callback) callback(null, buffer);
    });
  });
};
