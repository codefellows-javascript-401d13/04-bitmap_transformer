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
  for (var i = 0; i < tableString.length + 2; i += 2) {
    var hexStr = tableString.substring(i, i + 2);
    // console.log('hexStr:', hexStr);

    var intNum = parseInt('FF', 16) - parseInt(hexStr, 16);
    // console.log('after parseInt:', intNum);

    var hexNum = intNum.toString(16)
    // console.log('hexNum.tostr:', hexNum);
    // console.log('==================');

    invStr += hexNum;
    // tableString.

    // console.log(i);

  }
  // console.log(invStr.length);


}
