'use strict';

const fs = require('fs');
const image = require(`${__dirname}/../index.js`);

module.exports = exports = {};

exports.turnBlack = function(bitmap) {
  return bitmap.fill('0', 54, 1078);
};

exports.invert = function(bitmap) {
  for (var i = 54; i < 1078; i ++) {
    var invBitmap = bitmap.fill(255-bitmap[i], i, i+1);
  };
  console.log(invBitmap);
  return invBitmap;
};
