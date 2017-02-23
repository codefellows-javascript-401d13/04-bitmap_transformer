'use strict';
const fs = require('fs');
const expect = require('chai').expect;
const bitmapConstructor = require('../model/bitmap-constructor.js');

fs.readFile(`${__dirname}/../img/palette-bitmap.bmp`, function(err, data1){
  if(err) throw err;
  describe('Bitmap Constructor Module', function(){
    describe('when passed buffer object', function(){
      it('should instantiate a bitmap', function(done){
        let bit = new bitmapConstructor(data1, function(err, data){ //eslint-disable-line
          expect(err).to.equal(null);
          expect(data).to.be.an('object');
          done();
        });
      });
      it('should have the correct properties', function(done){
        let bit2 = new bitmapConstructor(data1, function(err, data){ //eslint-disable-line
          expect(err).to.equal(null);
          expect(data.color).to.be.an('array');
          expect(data.head).to.be.a('string');
          expect(data.pixel).to.be.a('string');
          done();
        });
      });
    });
  });
});
