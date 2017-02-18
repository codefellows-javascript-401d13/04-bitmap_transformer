'use strict';

const expect = require('chai').expect;
const fileHelper = require('../lib/bitmap-file-helper.js');

describe('File Reader Module', function(){
  describe('with an improper file path',function(){
    it('should return an error', function(done) {
      // fileHelper(`${__dirname}/not-a-file.js`, function(err))
    });
  });
});

describe('with a proper file path', function(){
  it('should return the contents of the file', function(done) {
    // fileHelper(`${__dirname}/..lib/bitmap-file-helper.js`)
  });
});
