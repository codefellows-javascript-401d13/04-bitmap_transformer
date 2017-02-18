
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
const EventEmitter = require("events").EventEmitter;
const fs = require('fs');
var ee = new EventEmitter();

const fileReader  = module.exports = function(file, callback){
  fs.readFile(`${__dirname}/../img/palette-bitmap.bmp`, function(err, data){
    ee.emit('imageLoaded', data)
  });


 ee.on("imageLoaded", function (bitmap) {
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
  //return callback(null, bmp.colorTable)
  ee.emit("imageParsed", bmp, bitmap);
  //console.log(bmp);
});
}

ee.on("imageParsed", function(bmp, bitmap){
 // fs.writeFile(`${__dirname}/../img/new-pallete`, data, function(err, data){
 //    if (err) throw err;
 //  });
    invert(null, bmp, bitmap);

});

//ee.emit("someEvent");
//console.dir(bitmap);
//catch unhandled errors
process.on('uncaughtException', (err) => {
  console.log('whoops! there was an error:', err);
});

fileReader()

function invert(err, bmp, bitmap){
  let newColorTable = [];
  let oldColorTable = [];
    for (var b of bmp.colorTable.entries()) {
//console.log(b);
    oldColorTable.push(b[1]);
  // newColorTable.push(255-b[1]);
   if((b[0]+1)%4!==0) {
      newColorTable.push(255-b[1])}
      else{
      newColorTable.push(b[1])
      }


 //;
  };
  //console.log(newColorTable, oldColorTable);
 //bmp.colorTable = newColorTable;
//console.log(newColorTable, );
  var newColorTableString = newColorTable.toString('hex');
console.log(newColorTableString)
  bitmap.write(newColorTable.toString(), 54, 1078);
  fs.writeFile(`${__dirname}/../img/new-pallete.bmp`, bitmap, function(err, data){
    if (err) throw err;
   });
 //console.log(newColorTable);

};

//console.dir(bitmap);