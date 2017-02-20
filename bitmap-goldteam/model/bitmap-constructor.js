'use strict';

const fs = require('fs');

module.exports = exports = {};

exports.readContent = function(callback) {
  fs.readFile(`${__dirname}/../img/palette-bitmap.bmp`, function(err, data) {
    if(err) return  callback(err);
    callback(null, data);
    const bitmap = data;
    var Image = function(type, size, width, height, imageStart, pixelArray) {
      this.type = bitmap.toString('utf-8', 0, 2);
      this.size = bitmap.readInt32LE(2);
      this.width = bitmap.readInt32LE(18);
      this.height = bitmap.readInt32LE(22);
      this.imageStart = bitmap.readInt32LE(10);
      this.pixelArray = bitmap.toString('hex', this.imageStart, this.size);
      

    };
    var test = new Image;
    console.log('var test:', test);
    return test;
  });
};

exports.readContent.prototype.grayscale = function() {
  for (var i = 0, j = this.pixelArray.length; i < j; i += 4) {
    var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg;
    data[i + 1] = avg;
    data[i + 2] = avg;
  }
};

exports.readContent.prototype.invert = function() {
  for (var i = 0; i < this.pixelArray.length; i += 4) {
    data[i] = 255 - data[i];
    data[i + 1] = 255 - data[i];
    data[i + 2] = 255 - data[i + 2];
  }
};

exports.readContent.prototype.white = function() {
  this.pixelArray.fill(255);
};
