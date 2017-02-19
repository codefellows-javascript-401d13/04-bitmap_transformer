'use strict';

const transform = require('./model/colorconst.js');

const len = process.argv.length;

if (len>2) {
  for (let i = 2; i < len; i++) {
    let arg = process.argv[i]
    console.log(arg);
    transform[arg]('pallette-bitmap.bmp', `${arg}-bitmap.bmp`);
  }
};
