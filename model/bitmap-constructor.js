'use strict';


module.exports = function Bitmap(buffer){
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

