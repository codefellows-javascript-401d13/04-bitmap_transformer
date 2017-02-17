'use strict';

const fs = require('fs');
const bitmap = fs.readFileSync(`${__dirname}/img/palette-bitmap.bmp`);
console.log('bitmap at index 0 @ beg-of-file: ',bitmap[0]);
console.log('bitmap at index 0 @ beg-of-file: ',bitmap.toString('hex', 0, 1));
console.log('bitmap at index 0 @ beg-of-file: ',Buffer.from(bitmap.toString('hex', 0, 1)));
console.log('bit map', bitmap)
console.log('bit map as a string of hex', bitmap.toString('hex', 0, 106))
var stringOHead = bitmap.toString('hex', 0, 54)
var stringOColor = bitmap.toString('hex', 54, 1078)
var stringOBuff = bitmap.toString('hex', 1078, 11078);



//console.log(newFile)

const bmp = {};
// console.log('thegap', bitmap.toString('hex').indexOf('000000000000000000000000000000000000000000'))
bmp.type = bitmap.toString('utf-8', 0, 2);
bmp.size = bitmap.readInt32LE(2);
bmp.imageStart = bitmap.readInt32LE(10);
bmp.headerSize = bitmap.readInt32LE(14);
bmp.width = bitmap.readInt32LE(18);
bmp.height = bitmap.readInt32LE(22);
bmp.colorPlanes = bitmap.readInt16LE(26);
bmp.bitPerPix = bitmap.readInt16LE(28);
bmp.compMeth = bitmap.readInt32LE(30);
bmp.imageSize = bitmap.readInt32LE(34);
bmp.horizontalRes = bitmap.readInt32LE(38);
bmp.vertRes = bitmap.readInt32LE(42);
bmp.numColors = bitmap.readInt32LE(46);
bmp.impColors = bitmap.readInt32LE(50);
bmp.redChanBitMask = bitmap.readInt32LE(54);
bmp.greenChanBitMask = bitmap.readInt32LE(58);
bmp.blueChanBitMask = bitmap.readInt32LE(62);
bmp.alphaChanBitMask = bitmap.readInt32LE(66);
bmp.colorSpaceType = bitmap.readInt32LE(70);
bmp.colorSpaceEndpoints = bitmap.readInt32LE(74);
bmp.redChanGamma = bitmap.toString('hex',78, 82);
bmp.greenChanGamma = bitmap.toString('hex',82,86);
bmp.blueChanGamma = bitmap.toString('hex',86,90);
bmp.intent= bitmap.toString('hex',90,94);
bmp.iccProfileData = bitmap.toString('hex',94,98);
bmp.iccProfileSize = bitmap.toString('hex',98,102);
bmp.reserved = bitmap.toString('hex',102,106);
bmp.colorDefIZero1 = bitmap.toString('hex',106,182);



let col = bitmap.toString('hex', 54,1078);
let px = bitmap.toString('hex', 1078,11078);
console.log('px len', px.length);



let str = '';
let hexArr = [];
let pxArr = [];
let pxSingle = [];


for(let i = 0; i < col.length; i+=8) {
  let a = `${(i/8)}:[${col[i]}${col[i+1]} ${col[i+2]}${col[i+3]} ${col[i+4]}${col[i+5]} ${col[i+6]}${col[i+7]}]`;

  hexArr.push(a);
}

for(let i = 0; i < px.length; i+=2) {
  let a = `${px[i]}${px[i+1]}`;

  pxSingle.push(a);
}

for(let i = 0; i < px.length; i+=8) {
  let a = `${(i/8)+1}:[${px[i]}${px[i+1]} ${px[i+2]}${px[i+3]} ${px[i+4]}${px[i+5]} ${px[i+6]}${px[i+7]}]`;

  pxArr.push(a);
}

hexArr.forEach(val => console.log(val));
// pxArr.forEach(val => console.log(val));

let pxRow = [];
for(let i=196; i<208; i+=2) {
  pxRow.push(`${px[i]}${px[i+1]}`);
}

console.log('px row: ', pxRow);


let uniquePixels = pxSingle.reduce((arr, val) => {
  if (arr.indexOf(val) === -1) arr.push(val);
  return arr;
}, []);

console.log('unique', uniquePixels);
console.log('unique length', uniquePixels.length);

// //bmp.imageData = bitmap.toString('hex', 1078, 10079);

// //bmp.colorMap1 = bitmap.readInt32LE(55);

console.dir(bmp);


let bitmapColorArray = [];
let colorMapStart = 54;

let singleColorStart = colorMapStart;

for(let i = 0; i < 256; i++){
  let singleColorArray = [];
  for(let j = singleColorStart; j < (singleColorStart + 4); j++){
    singleColorArray.push(bitmap.readUInt8(j));
  }
  bitmapColorArray.push(singleColorArray);
  singleColorStart += 4;
}

console.log(bitmapColorArray);

function transformPixel(colorArray, transformFn) {
  return colorArray.map(transformFn);
}


function zeroFirstTransform(color) {
  return [0, color[1], color[2], color[3]];
}

function invertTransform(color) {
  function invert(color) {
    return 255 - color;
  }
  return [invert(color[1]), invert(color[2]), invert(color[3]), color[3]];
}
// var manipData = stringOColor.match(/.{1,2}/g).map(function(ele){
//   return ele = '00';
// }).join('');
// console.log('should just be 0s', manipData)

var manipData = colorMapToString(transformPixel(bitmapColorArray, zeroFirstTransform));

var invertData = colorMapToString(transformPixel(bitmapColorArray, invertTransform));

var invertFile =  stringOHead + invertData + stringOBuff;

var bitInv = new Buffer.from(invertFile, 'hex')
console.log('what i am trying to make the new file with', bitInv)
fs.writeFile(`${__dirname}/img/palette-bitmap-invert.bmp`, bitInv, function(err){
  if(err) throw err;
  console.log('Hey I made a new file!')
})

console.log('manipData: ', manipData);

var newFile = stringOHead + manipData + stringOBuff;

function colorMapToString(colorArray) {
  let string = '';
  colorArray.forEach(color => {
    color.forEach(channel => string += channel);
  });
  return string;
}

var bit2 = new Buffer.from(newFile, 'hex')
console.log('what i am trying to make the new file with', bit2)
fs.writeFile(`${__dirname}/img/palette-bitmapnew.bmp`, bit2, function(err){
  if(err) throw err;
  console.log('Hey I made a new file!')
})
