'use strict';

const Bitmap = module.exports = function Bitmap(buffer, callback){
  this.size = buffer.readInt32LE(2);
  this.imageStart = buffer.readInt32LE(10);
  this.headerSize = buffer.readInt32LE(14);
  this.imageSize = buffer.readInt32LE(34);
  this.numColors = buffer.readInt32LE(46);
  this.head = buffer.toString('hex', 0, 54);
  let bitmapColorArray = [];
  let colorMapStart = 14 + this.headerSize;
  let singleColorStart = colorMapStart;
  for(let i = 0; i < this.numColors; i++){
    let singleColorArray = [];
    for(let j = singleColorStart; j < (singleColorStart + 4); j++){
      singleColorArray.push(buffer.readUInt8(j));
    }
    bitmapColorArray.push(singleColorArray);
    singleColorStart += 4;
  }
  this.color = bitmapColorArray;
  this.pixel = buffer.toString('hex', this.imageStart, this.imageStart + this.imageSize);
  if(callback) callback(null, this);
};

Bitmap.colorMapToString = function(array) {
  var color = '';
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array[i].length; j++){
      let temp = array[i][j].toString(16);
      if (array[i][j] < 16) temp = `0${temp}`;
      color += temp;
    }
  }
  return color;
};

Bitmap.prototype.transformPixel = function transformPixel(transformFn) {
  return this.color.map(transformFn);
};

Bitmap.invertTransform = function invertTransform(color) {
  function invert(color) {
    return 255 - color;
  }
  return [invert(color[0]), invert(color[1]), invert(color[2]), color[3]];
};

Bitmap.blueTransform = function blueTransform(color) {
  function blue(color, level) {
    return Math.min(255, Math.floor(color * level));
  }
  return [255, blue(color[1], .5), blue(color[2], .5), color[3]];
};
Bitmap.grayTransform = function grayTransform(color) {
  function gray(color, level) {
    return Math.min(255, Math.floor(color * level));
  }
  return [gray(color[0], .15), gray(color[1], .1), gray(color[2], .12), color[3]];
};
