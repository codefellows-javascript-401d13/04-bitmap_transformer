'use strict';

const fs = require('fs');
const image = require(`${__dirname}/../index.js`);

module.exports = exports = {};


exports.exportImg = function(img) {
  // console.log(typeof img);
  fs.writeFile(`${__dirname}/../img/transformed.bmp`, img, function(err, data) {
    if(err) throw err;
  });
}

exports.turnBlack = function(tableString) {
  // console.log(tableString);
  // console.log('f'.repeat(2048));
  return '0'.repeat(2048);
  // exports.exportImg(img);

}

exports.invert = function(tableString) {
  var invStr = '';
  // console.log(tableString.length);
  for (var i = 0; i < tableString.length; i += 2) {
    var hexStr = tableString.slice(i, i + 1);

    var intNum = parseInt('FF', 16) - parseInt(hexStr, 16);
    // console.log('after parseInt:', intNum.length);

    var hexNum = intNum.toString(16)
    // console.log('hexNum.tostr:', hexNum.length);

    invStr += hexNum;
    // tableString.


  }
  return invStr;
}
