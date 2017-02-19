'use strict';

const transform = require('./model/colorconst.js');

const len = process.argv.length;

if (len>2) {
  for (let i = 2; i < len; i++) {
    let arg = process.argv[i];
    transform[arg]('pallette-bitmap.bmp', `${arg}-bitmap.bmp`);
  }
  return
}
throw new Error('You must supply a transform command: grayscale, invert, bluescale or random)');