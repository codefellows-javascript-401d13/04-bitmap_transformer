'use strict';




const fs = require('fs');
const fileHelper = require('./lib/bitmap-file-helper.js');
const Bitmap = require('./model/bitmap-constructor.js');

fileHelper(`${__dirname}/img/palette-bitmap.bmp`, 'green', 'hello');

// function transformPixel(colorArray, transformFn) {
//   return colorArray.map(transformFn);
// }
//
//
// function zeroFirstTransform(color) {
//   return [0, color[1], color[2], color[3]];
// }
//
// function invertTransform(color) {
//   function invert(color) {
//     return 255 - color;
//   }
//   return [invert(color[1]), invert(color[2]), invert(color[3]), color[3]];
// }


// var manipData = colorMapToString(transformPixel(bitmapColorArray, zeroFirstTransform));

// var invertData = colorMapToString(transformPixel(bitmapColorArray, invertTransform));

// var invertFile =  stringOHead + invertData + stringOBuff;

// var bitInv = new Buffer.from(invertFile, 'hex');
// fs.writeFile(`${__dirname}/img/palette-bitmap-invert.bmp`, bitInv, function(err){
//   if(err) throw err;
//   console.log('Hey I made a new file!')
// })

// console.log('manipData: ', manipData);

// var newFile = stringOHead + manipData + stringOBuff;
//
// function colorMapToString(colorArray) {
//   let string = '';
//   colorArray.forEach(color => {
//     color.forEach(channel => string += channel);
//   });
//   return string;
// }

// var bit2 = new Buffer.from(newFile, 'hex')
// console.log('what i am trying to make the new file with', bit2)
// fs.writeFile(`${__dirname}/img/palette-bitmapnew.bmp`, bit2, function(err){
//   if(err) throw err;
//   console.log('Hey I made a new file!')
// })
