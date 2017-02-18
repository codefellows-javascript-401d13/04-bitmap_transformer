'use strict';

const Bitmap = function Bitmap(buffer){
  this.head = buffer.toString('hex', 0, 54);
  let bitmapColorArray = [];
  let colorMapStart = 54;
  let singleColorStart = colorMapStart;
  for(let i = 0; i < 256; i++){
    let singleColorArray = [];
    for(let j = singleColorStart; j < (singleColorStart + 4); j++){
      singleColorArray.push(buffer.readUInt8(j));
    }
    bitmapColorArray.push(singleColorArray);
    singleColorStart += 4;
  }
  this.color = bitmapColorArray;
  this.pixel = buffer.toString('hex', 1078, 11078);
};

Bitmap.colorMapToString = function(array) {
  // var color = '';
  // for(let i = 0; i < array.length; i++){
  //   for(let j = 0; j < array[i].length; j++){
  //     let temp = array[i][j].toString(16);
  //     if(temp === '0') temp = '00';
  //     color += temp;
  //   }
  // }
  // return color;

  let buffer = new Buffer.alloc(256);

  array.forEach(color => {
    color.forEach(channel => {
      w
    });
  });

  function channelToBuffer(channel) {
    buffer.writeInt8()
  }


};

Bitmap.prototype.transformPixel = function transformPixel(transformFn) {
  return this.color.map(transformFn);
};


Bitmap.zeroFirstTransform = function zeroFirstTransform(color) {
  // return [0, color[1], color[2], color[3]];
  return [0, color[1], color[2], color[3]];
};

Bitmap.invertTransform = function invertTransform(color) {
  function invert(color) {
    return 255 - color;
  }
  return [invert(color[0]), invert(color[1]), invert(color[2]), color[3]];
};

module.exports = Bitmap;


// var manipData = colorMapToString(transformPixel(bitmapColorArray, zeroFirstTransform));
//
// var invertData = colorMapToString(transformPixel(bitmapColorArray, invertTransform));
