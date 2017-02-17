'use strict';

const fs = require('fs');
const bmpCon = require(`${__dirname}/../model/bmp-constructor.js`)
module.exports = exports = {};

exports.getBitMap = function(cb) {
  fs.readFile(`${__dirname}/../img/palette-bitmap.bmp`, function(err, data) {
    if (err) throw err;
    cb(data);
  });
};

exports.newBitMap = function(data) {
  fs.writeFile(`${__dirname}/../img/palette-bitmap-new.bmp`, data, function(err) {
    if (err) throw err;
    console.log('your new file can be found here: ', `${__dirname}/../img/palette-bitmap-new.bmp`);
  });
};
