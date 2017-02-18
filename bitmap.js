'use strict';

// const fs = require('fs');
const fileHelper = require('./lib/bitmap-file-helper.js');
// const Bitmap = require('./model/bitmap-constructor.js');

fileHelper(`${__dirname}/img/palette-bitmap.bmp`, 'green', 'hello');
