// 'use strict';

// const fs = require('fs');
// const bitmap = fs.readFileSync(`${__dirname}.assets/palette-bitmap.bmp`);

// const bmp = {};

// bmp.type = bitmap.toString('utf-8', 0,2); //returns type of bitmap
// bmp.size = bitmap.readInt32LE(2); //based on 32 bit Little Endian
// bmp.width = bitmap.readInt32LE(18); //finding location within buffer array
// bmp.height = bitmap.readInt32LE(22);
// //more attributes needed, color, pixel

// console.dir(bmp);

'use strict';

const fs =  require('fs');

const fileReader  = module.exports = function(file, callback){
fs.readFile(file, function(err, bitmap){
  if (err) return callback(err);
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
  return callback(null, bmp) ;
 //console.log(bmp);
  fs.writeFile(`${__dirname}/../img/new-pallete.bmp`, bitmap, function(err, data){
    if (err) throw err;
    //console.log(data);
  });
});
}






//console.dir(bitmap);