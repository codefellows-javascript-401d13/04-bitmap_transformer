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

exports.turnBlack = function orange(tableString) {
  // console.log(tableString);
  // console.log('f'.repeat(2048));
  return '0'.repeat(2048);
  // exports.exportImg(img);

}
//
