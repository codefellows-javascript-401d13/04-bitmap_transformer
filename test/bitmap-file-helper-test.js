'use strict';

const expect = require('chai').expect;
const fileHelper = require('../lib/bitmap-file-helper.js');

describe('File Reader Module', function(){
  describe('with an improper file path',function(){
    it('should return an error', function(done) {
      fileHelper('img/badPath.bmp', 'palette', 'invertTransform', function(err){
        expect(err).to.be.an('error');
        done();
      });
    });
  });

  describe('with a proper file path and invert transform', function(){
    it('should return the buffer of the file', function(done) {
      fileHelper(`${__dirname}/../img/palette-bitmap.bmp`, 'palette', 'invertTransform', function(err, data){
        expect(err).to.equal(null);
        expect(data).to.have.length.above(11077);
        expect(data).to.have.length.below(11079);
        done();
      });
    });
  });
  describe('with a proper file path and gray transform', function(){
    it('should return the buffer of the file', function(done) {
      fileHelper(`${__dirname}/../img/palette-bitmap.bmp`, 'palette', 'grayTransform', function(err, data){
        expect(err).to.equal(null);
        expect(data).to.have.length.above(11077);
        expect(data).to.have.length.below(11079);
        done();
      });
    });
  });
  describe('with a proper file path and blue transform', function(){
    it('should return the buffer of the file', function(done) {
      fileHelper(`${__dirname}/../img/palette-bitmap.bmp`, 'palette', 'blueTransform', function(err, data){
        expect(err).to.equal(null);
        expect(data).to.have.length.above(11077);
        expect(data).to.have.length.below(11079);
        done();
      });
    });
  });
});
