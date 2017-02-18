'use strict';

const fs = require('fs');
const image = require(`${__dirname}/../index.js`);

module.exports = exports = {};

exports.turnBlack = function(bitmap) {
  const blackBuf = new Buffer(bitmap);
  return blackBuf.fill('00', 54, 1078);
};

exports.invert = function(bitmap) {
  const invertBuf = new Buffer(bitmap);
  for (var i = 54; i < 1078; i ++) {
    invertBuf.fill(255-bitmap[i], i, i+1);
  };
  return invertBuf;
};

// exports.redScale = function(data) {
//   const redBuf = new Buffer(bitmap);
//   for(var i = 54; i < 1078; i + 3) {
//     var redBitmap = bitmap.fill('255', i, )
//   }
// }
