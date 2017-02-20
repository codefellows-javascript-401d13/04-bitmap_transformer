'use strict';

const fs = require('fs');
const image = require(`${__dirname}/../index.js`);

module.exports = exports = {};

exports.turnBlack = function(bitmap) {
  const blackBuf = new Buffer(bitmap);
  return blackBuf.fill('00', 54, 1078);
  // console.log(blackBuf);
};

exports.invert = function(bitmap) {
  const invertBuf = new Buffer(bitmap);
  for (var i = 54; i < 1078; i++) {
    invertBuf.fill(255-bitmap[i], i, i+1);
  };
  // console.log(invertBuf.toString('hex').slice(54,1078));
  return invertBuf;
};

exports.redScale = function(bitmap) {
  const redBuf = new Buffer(bitmap);
  for(var i = 56; i < 1078; i += 4) {
    redBuf.fill(255, i, i+1);
  };
  // console.log(redBuf.toString('hex').slice(54,1078));
  return redBuf;
};

exports.greyScale = function(bitmap) {
  const greyBuf = new Buffer(bitmap);
  for(var i = 54; i < 1078; i += 4) {
    greyBuf.fill(greyBuf[i+1], i, i+1);
    greyBuf.fill(greyBuf[i+1], i+1, i+2);
    greyBuf.fill(greyBuf[i+1], i+2, i+3);
  };
  // console.log(greyBuf.toString('hex').slice(54,1078));
  return greyBuf;
};
