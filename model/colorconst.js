'use strict'

const readWrite = require('../lib/bitmap-helper');

module.exports  = exports = {};

exports.invert = function(inputFile, outputFile){
  readWrite.read(inputFile, function(err, parsedInfo, bitmap){
    for (var key of parsedInfo.colorTable.keys()) {
      if((key+1)%4!==0) parsedInfo.colorTable[key] = 255 - parsedInfo.colorTable[key];
    };
    readWrite.write(null, bitmap, outputFile);
  });
};
exports.grayscale = function(inputFile, outputFile){
  readWrite.read(inputFile, function(err, parsedInfo, bitmap){
    let highestValue = 0;
    //let pixelObj = {};
    for (var key of parsedInfo.colorTable.keys()) {
      if ((key+1)%4!==0){
      if (highestValue < parsedInfo.colorTable[key]) highestValue = parsedInfo.colorTable[key];
      };
      if ((key+1)%4==0) {
        parsedInfo.colorTable[key-1] = highestValue;
        parsedInfo.colorTable[key-2] = highestValue;
        parsedInfo.colorTable[key-3] = highestValue;
        highestValue = 0;
        }
    readWrite.write(null, bitmap, outputFile);
    };
  });
};
exports.random = function(inputFile, outputFile){
  readWrite.read(inputFile, function(err, parsedInfo, bitmap){
    var topNum = (Math.random() * 2) + 1;
    for (var key of parsedInfo.colorTable.keys())  {
      if((key+1)%4!==0) parsedInfo.colorTable[key] = topNum * parsedInfo.colorTable[key];
    readWrite.write(null, bitmap, outputFile);
    };
  });
};

exports.bluescale = function(inputFile, outputFile){
  readWrite.read(inputFile, function(err, parsedInfo, bitmap){
    let blueValue = 0;
    for (var key of parsedInfo.colorTable.keys()) {
      if ((key+1)%4!==0){
      if (key%4==0) blueValue = parsedInfo.colorTable[key];
      };
      if ((key+1)%4==0) {
        parsedInfo.colorTable[key-1] = 30;
        parsedInfo.colorTable[key-2] = 30;
        }
    readWrite.write(null, bitmap, outputFile);
    };
  });
};