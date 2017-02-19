'use strict';

const fs = require('fs');
const transforms = require(`${__dirname}/../lib/transforms.js`);

module.exports = exports = {};
//
// const file1 = `${__dirname}/../img/palette-bitmap.bmp`;
// const file2 = `${__dirname}/../img/inverted.bmp`;
// const file3 = `${__dirname}/../img/black.bmp`;
// const file4 = `${__dirname}/../img/red.bmp`;
// const file5 = `${__dirname}/../img/grey.bmp`;

exports.readWrite = function() {

  fs.readFile(`${__dirname}/../img/palette-bitmap.bmp`, function(err, data) {
    if (err) throw err;
    const bitmap = data;

    fs.writeFile(`${__dirname}/../img/inverted.bmp`, transforms.invert(bitmap), function(err, data) {
      if (err) throw err;
    });

    fs.writeFile(`${__dirname}/../img/black.bmp`, transforms.turnBlack(bitmap), function(err, data) {
      if (err) throw err;
    });

    fs.writeFile(`${__dirname}/../img/red.bmp`, transforms.redScale(bitmap), function(err, data) {
      if (err) throw err;
    });

    fs.writeFile(`${__dirname}/../img/grey.bmp`, transforms.greyScale(bitmap), function(err, data) {
      if (err) throw err;
    });
  });
};
