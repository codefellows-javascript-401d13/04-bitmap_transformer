'use strict';
const EventEmitter = require('events').EventEmitter;
const fs = require('fs');
var ee = new EventEmitter();

const fileReader  = module.exports = function(file, callback){
  fs.readFile(`${__dirname}/../img/palette-bitmap.bmp`, function(err, data){
    ee.emit('imageLoaded', data, callback);
  });
}

ee.on('imageLoaded', function (bitmap, callback) {
  const bmp = {};
  bmp.type = bitmap.toString('utf-8', 0, 2);
  bmp.size = bitmap.readInt32LE(2);
  bmp.width = bitmap.readInt32LE(18);
  bmp.height = bitmap.readInt32LE(22);
  bmp.bitsPerPixel = bitmap.readInt32LE(28, 2);
  bmp.numOfColors = bitmap.readInt32LE(46);
  bmp.pixelArrayOffset = bitmap.readInt32LE(10, 4);
  bmp.colorTable = bitmap.slice(54, 1078);
  bmp.rowSize = Math.floor((bmp.bitsPerPixel * bmp.width + 31)/32)*4;
  ee.emit('imageParsed', null, bmp, bitmap);
  //console.log(bmp);
   return callback(null, bmp)
});


ee.on('imageParsed', function(err,bmp, bitmap){
  if (err) throw err;
  invert(null, bmp, bitmap);

});

ee.on('imageWritten', function(err, fileName){
  if (err) throw err;
  console.log('Image Written:', fileName);
});
//catch unhandled errors
process.on('uncaughtException', (err) => {
  console.log('whoops! there was an error:', err);
});

fileReader()

function invert(err, bmp, bitmap){
  for (var key of bmp.colorTable.keys()) {
    //console.log(bmp.colorTable[key]);
    bmp.colorTable[key] = 255 - bmp.colorTable[key]
    //write to the origin buffer memory directly
  }
  let newFile = `${__dirname}/../img/new-pallete.bmp`
  fs.writeFile(newFile, bitmap, function(err, data){
    if (err) throw err;
    ee.emit('imageWritten', null, newFile);
   });
};