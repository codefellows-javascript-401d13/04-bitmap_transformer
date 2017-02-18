'use strict'
const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
var ee = new EventEmitter();

module.exports = exports = {}

exports.read =  function(file, callback){
  fs.readFile(`${__dirname}/../img/palette-bitmap.bmp`, function(err, bitmap){
    if (err) throw err;
//    ee.emit('imageLoaded', data, callback);
    const bmp = {};
    //console.log(err);
    bmp.type = bitmap.toString('utf-8', 0, 2);
    bmp.size = bitmap.readInt32LE(2);
    bmp.width = bitmap.readInt32LE(18);
    bmp.height = bitmap.readInt32LE(22);
    bmp.bitsPerPixel = bitmap.readInt32LE(28, 2);
    bmp.numOfColors = bitmap.readInt32LE(46);
    bmp.pixelArrayOffset = bitmap.readInt32LE(10, 4);
    bmp.colorTable = bitmap.slice(54, 1078);
    bmp.rowSize = Math.floor((bmp.bitsPerPixel * bmp.width + 31)/32)*4;
    //ee.emit('imageParsed', null, bmp, bitmap);
    //console.log(bmp);
     return callback(null, bmp, bitmap)
  });
};



exports.write = function(err, data, fileName){
  if(err) throw err;
  fs.writeFile(`${__dirname}/../img/${fileName}`, data, function(err, data){
    if (err) throw err;
    return fileName;
    console.log(fileName);
  });
};