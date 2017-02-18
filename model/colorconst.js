'use strict'

const readWrite = require('../lib/bitmap-helper');

module.exports  = exports = {};

exports.invert = function(inputFile, outputFile){
  readWrite.read(inputFile, function(err, parsedInfo, bitmap){
    for (var key of parsedInfo.colorTable.keys()) {
      parsedInfo.colorTable[key] = 255 - parsedInfo.colorTable[key];
    };
    readWrite.write(null, bitmap, outputFile);
  });
};

