'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync(`${__dirname}/img/palette-bitmap.bmp`);
console.log('bit map', bitmap)
console.log('bit map as a string of hex', bitmap.toString('hex', 0, 106))
var stringOHead = bitmap.toString('hex', 0, 106)
var stringOColor = bitmap.toString('hex', 106, 182)
var stringOBuff = bitmap.toString('hex', 182, 11078);
var manipData = stringOColor.match(/.{1,2}/g).map(function(ele){
  return ele = '00';
}).join('');
console.log('should just be 0s', manipData)

var newFile = stringOHead + manipData + stringOBuff



//console.log(newFile)
var bit2 = new Buffer.from(newFile, 'hex')
console.log('what i am trying to make the new file with', bit2)
fs.writeFile(`${__dirname}/img/palette-bitmapnew.bmp`, bit2, function(err){
  if(err) throw err;
  console.log('Hey I made a new file!')
})

const bmp = {};
// console.log('thegap', bitmap.toString('hex').indexOf('000000000000000000000000000000000000000000'))
// bmp.type = bitmap.toString('utf-8', 0, 2);
// bmp.size = bitmap.readInt32LE(2);
// bmp.imageStart = bitmap.readInt32LE(10);
// bmp.headerSize = bitmap.readInt32LE(14);
// bmp.width = bitmap.readInt32LE(18);
// bmp.height = bitmap.readInt32LE(22);
// bmp.colorPlanes = bitmap.readInt16LE(26);
// bmp.bitPerPix = bitmap.readInt16LE(28);
// bmp.compMeth = bitmap.readInt32LE(30);
// bmp.imageSize = bitmap.readInt32LE(34);
// bmp.horizontalRes = bitmap.readInt32LE(38);
// bmp.vertRes = bitmap.readInt32LE(42);
// bmp.numColors = bitmap.readInt32LE(46);
// bmp.impColors = bitmap.readInt32LE(50);
// bmp.redChanBitMask = bitmap.readInt32LE(54);
// bmp.greenChanBitMask = bitmap.readInt32LE(58);
// bmp.blueChanBitMask = bitmap.readInt32LE(62);
// bmp.alphaChanBitMask = bitmap.readInt32LE(66);
// bmp.colorSpaceType = bitmap.readInt32LE(70);
// bmp.colorSpaceEndpoints = bitmap.readInt32LE(74);
// bmp.redChanGamma = bitmap.toString('hex',78, 82);
// bmp.greenChanGamma = bitmap.toString('hex',82,86);
// bmp.blueChanGamma = bitmap.toString('hex',86,90);
// bmp.intent= bitmap.toString('hex',90,94);
// bmp.iccProfileData = bitmap.toString('hex',94,98);
// bmp.iccProfileSize = bitmap.toString('hex',98,102);
// bmp.reserved = bitmap.toString('hex',102,106);
bmp.colorDefIZero1 = bitmap.toString('hex',106,182);

// //bmp.imageData = bitmap.toString('hex', 1078, 10079);

// //bmp.colorMap1 = bitmap.readInt32LE(55);

console.dir(bmp)
