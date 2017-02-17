'use strict';

const fs = require('fs');
const EE = require('events');
const ee = new EE;


const aaa = [];

ee.on('abc', function(data) {
  if (aaa.length !== 0) return;
  fs.readFile(`${__dirname}/../img/palette-bitmap.bmp`, function(err, data) {
    if(err) throw err;
    console.log(data.toString('hex'));
    aaa.push(data.toString('hex'));
    console.log(aaa);
    ee.emit('abc');
    // console.log('constructed object:', bmp);
  });
    // const bmp = new Image(bitmap);
    // console.log('constructed object:', bmp);
});
ee.emit('abc');

// const bitmap = fs.readFile(`${__dirname}/../img/palette-bitmap.bmp`, function(err, data) {
//   if(err) throw err;
// });
// console.log(bitmap);
console.log(aaa);
var Image = function(type, size, width, height, imageStart, pixelArray) {
  this.type = bitmap.toString('utf-8', 0, 2);
  this.size = bitmap.readInt32LE(2);
  this.width = bitmap.readInt32LE(18);
  this.height = bitmap.readInt32LE(22);
  this.imageStart = bitmap.readInt32LE(10);
  this.pixelArray = bitmap.toString('hex', this.imageStart, this.size);
};
//
// console.dir(bmp);
//
// console.log(typeof(Image.pixelArray));
// const bmp = new Image(bitmap);
