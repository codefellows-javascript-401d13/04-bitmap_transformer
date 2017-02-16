'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync(`${__dirname}/../img/palette-bitmap.bmp`);

var Image = function(type, size, width, height, imageStart, pixelArray) {
  this.type = bitmap.toString('utf-8', 0, 2);
  this.size = bitmap.readInt32LE(2);
  this.width = bitmap.readInt32LE(18);
  this.height = bitmap.readInt32LE(22);
  this.imageStart = bitmap.readInt32LE(10);
  this.pixelArray = bitmap.toString('hex', this.imageStart, this.size);
};

const bmp = new Image(bitmap);

console.dir(bmp);

console.log(typeof(Image.pixelArray));
