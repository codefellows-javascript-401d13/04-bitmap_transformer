
const fs = require('fs');
const Bitmap = require('../model/bitmap-constructor.js');
const imgReader = module.exports = function(imgPath, transform, newfile){ //eslint-disable-line
  fs.readFile(imgPath, function(err, data){
    if(err) throw err;
    var bit = new Bitmap(data);
    //if(color === 'green') bit.changeGreen
    //if()// more transforms.
    //return bitmap
    var color = '';
    for(let i = 0; i < bit.color.length; i++){
      for(let j = 0; j < bit.color[i].length; j++){
        let temp = bit.color[i][j].toString(16);
        if(temp === '0') temp = '00'
        color += temp;
      }
    }
    var invertString = bit.head + Bitmap.colorMapToString(bit.transformPixel(Bitmap.invertTransform)) + bit.pixel;
    var invertBuff = new Buffer.from(invertString, 'hex');
    var zeroFirstString = bit.head + Bitmap.colorMapToString(bit.transformPixel(Bitmap.zeroFirstTransform)) + bit.pixel;
    var zeroFirstBuff = new Buffer.from(zeroFirstString, 'hex');
    var noTransformString = bit.head + Bitmap.colorMapToString(bit.color) + bit.pixel;
    var noTransformBuff = new Buffer.from(noTransformString, 'hex');

    // var zeroFirstString = bit.head + color + bit.pixel;
    // var zeroFirstBuff = new Buffer.from(zeroFirstString, 'hex');

    // var transformBitmaps = [new Buffer.from(bit.head + color + bit.pixel)]

    fs.writeFile(`${__dirname}/../img/${newfile}-transform-none.bmp`, noTransformBuff, function(err){
      if(err) throw err;
      console.log('wrote the file.');
    });


    fs.writeFile(`${__dirname}/../img/${newfile}-transform-zero.bmp`, zeroFirstBuff, function(err){
      if(err) throw err;
      console.log('wrote the file.');
    });

    fs.writeFile(`${__dirname}/../img/${newfile}-transform-invert.bmp`, invertBuff, function(err){
      if(err) throw err;
      console.log('wrote the file.');
    });

    var colaz = data.slice(54,1078);

    for (let byte of colaz.values()) {
      byte = 0;
      console.log('byte', 0);
    }

    data.writeInt8(0,58);
    console.log(data);

    // for (let i = 54; i < 1078; i++) {
    //   data.writeInt8(255 - data.readUInt8(i), i)
    // }

    let buffer = new Buffer.alloc(256);

    console.log('test buff: ',  buffer);

    console.log(colaz);

    fs.writeFile(`${__dirname}/../img/${newfile}-newnew.bmp`, Buffer.concat([data.slice(0,54), data.slice(54,1078), data.slice(1078,11078)]), function(err){
      if(err) throw err;
      console.log('wrote the file.');
    });

    // function writeBMPfiles(destName, transformName, bufferObject, callback) {
    //   fs.writeFile(`${__dirname}/../img/${newfile}-${transformName}-convert.bmp`, bufferObject, callback(err));
    // }
  });
};
