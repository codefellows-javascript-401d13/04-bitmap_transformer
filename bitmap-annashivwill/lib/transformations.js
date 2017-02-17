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

exports.turnOrange = function orange(img) {
  // img.colorpalette
  exports.exportImg(img);

}
///f
