'use strict';

const fs = require('fs');
const transforms = require(`${__dirname}/../lib/transforms.js`);

module.exports = exports = {};

const file1 = `${__dirname}/../img/palette-bitmap.bmp`;
const file2 = `${__dirname}/../img/inverted.bmp`;
const file3 = `${__dirname}/../img/black.bmp`;
const file4 = `${__dirname}/../img/red.bmp`;
const file5 = `${__dirname}/../img/grey.bmp`;

exports.readWrite = function(file1, file2, file3, file4) {

  fs.readFile(file1, function(err, data) {
    if (err) throw err;
    const bitmap = data;

    fs.writeFile(file2, transforms.invert(bitmap), function(err, data) {
      if (err) throw err;
    });

    fs.writeFile(file3, transforms.turnBlack(bitmap), function(err, data) {
      if (err) throw err;
    });

    fs.writeFile(file4, transforms.redScale(bitmap), function(err, data) {
      if (err) throw err;
    });

    fs.writeFile(file5, transforms.greyScale(bitmap), function(err, data) {
      if (err) throw err;
    });
  });
};
