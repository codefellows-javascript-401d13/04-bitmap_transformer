'use strict';

const fileHelper = require('./lib/bitmap-file-helper.js');

fileHelper(`${__dirname}/img/palette-bitmap.bmp`, 'palette', 'invertTransform');
fileHelper(`${__dirname}/img/palette-bitmap.bmp`, 'palette', 'grayTransform');
fileHelper(`${__dirname}/img/palette-bitmap.bmp`, 'palette', 'blueTransform');
