'use strict';

const fs = require('fs');
const image = require(`${__dirname}/../index.js`);

module.exports = exports = {};

exports.turnBlack = function(tableString) {
  return '0'.repeat(2048);
};

exports.invert = function(bitmap) {
  for (var i = 0; i < bitmap.length; i ++) {
    var invBitmap = bitmap.fill(255-bitmap[i], i, i+1);
  };
  return invBitmap;
};
