'use strict';

const expect = require('chai').expect;
const fileReader = require('../lib/file-reader.js');

////////// TESTS //////////

///// REIVING BITMAP TESTS /////
describe('RECEIVING BITMAP MODULE --', function() {
  describe('Should return a failed test:', function() {
    it('for incorrect or nonexistant bitmap filepath.', function(done) {
      fileReader(`${__dirname}/../notreal.js`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });
  describe('Should return a passing test:', function() {
    it ('for correct original bitmap filepath.', function(done) {
      fileReader(`${__dirname}/../img/palette-bitmap.bmp`, function(err, data) {
        expect(err).to.equal(null);
        expect(data.toString('hex')).to.be.a('string');
        done();
      });
    });
  });
});

///// BLACK TRANSFORMATION TESTS //////
describe('BLACK TRANSFORMATION MODULE --', function() {
  describe('Should return a failed test:', function() {
    it('for incorrect filepath of BLACK.', function(done) {
      fileReader(`${__dirname}/../img/notblack.bmp`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });
  describe('Should return a passing test:', function() {
    it('for the correct transformation of BLACK.', function(done) {
      fileReader(`${__dirname}/../img/black.bmp`, function(err, data) {
        expect(err).to.equal(null);
        // expect(data.toString()).to.be.a('string');
        expect(data.toString('utf-8').slice(54, 1078)).to.equal('0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
        done();
      });
    });
  });
});

///// INVERSE TRANSFORMATION TESTS /////
describe('INVERSE TRANSFORM MODULE --', function() {
  describe('Should return a failed test:', function() {
    it('for incorrect filepath of INVERSE.', function(done) {
      fileReader(`${__dirname}/../img/notinverted.bmp`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });
  describe('Should return a passing test:', function() {
    it('for the correct transformation of INVERSE.', function(done) {
      fileReader(`${__dirname}/../img/inverted.bmp`, function(err, data) {
        expect(err).to.equal(null);
        // expect(data.toString('hex')).to.be.a('string');
        expect(data.toString('hex').slice(54, 1078)).to.equal('0008000000000010270000120b0000120b00000001000000010000ffffffffcbdfddffc3d7baffcec699ffc4a970ffd98e20ff995f26ff653c11ffc90d04ffaf1a66ffcf4195ff916bc8ffd096b4ffdbb4adffc6c3cdff8bc0c0ff7d9fcfff1e91a4ff00649cff1b32a0ff032434ff000000ff485264ff78817bff959596ffada9a6ff75bd89ffcdcd53ff9ca826ff458428ffb56870ffcf9075ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
        done();
      });
    });
  });
});

///// REDSCALE TRANSFORMATION TESTS /////
describe('RED TRANSFORMATION MODULE --', function() {
  describe('Should return a failed test:', function() {
    it('for incorrect filepath of REDSCALE.', function(done) {
      fileReader(`${__dirname}/../img/notred.bmp`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });
  describe('Should return a passing test:', function() {
    it('for correct transformation of REDSCALE.', function(done) {
      fileReader(`${__dirname}/../img/red.bmp`, function(err, data) {
        expect(null).to.equal(null);
        // expect(data.toString('hex')).to.be.a('string');
        expect(data.toString('hex').slice(54, 1078)).to.equal('0008000000000010270000120b0000120b000000010000000100000000ff003420ff003c28ff003139ff003b56ff002671ff0066a0ff009ac3ff0036f2ff0050e5ff0030beff006e94ff002f69ff00244bff00393cff00743fff008260ff00e16eff00ff9bff00e4cdff00fcdbff00ffffff00b7adff00877eff006a6aff005256ff008a42ff003232ff006357ff00ba7bff004a97ff00306fff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff000000ff0000');
        done();
      });
    });
  });
});


///// GREYSCALE TRANSFORMATION TESTS /////
describe('GREYSCALE TRANSFORMATION MODULE --', function() {
  describe('Should return a failed test:', function() {
    it('for incorrect filepath of GREYSCALE.', function(done) {
      fileReader(`${__dirname}/../img/notgrey.bmp`, function(err) {
        expect(err).to.be.an('error');
        done();
      });
    });
  });
  describe('Should return a passing test:', function() {
    it('for the correct transformation for GREYSCALE.', function(done) {
      fileReader(`${__dirname}/../img/grey.bmp`, function(err, data) {
        expect(err).to.equal(null);
        // expect(data.toString('hex')).to.be.a('string');
        expect(data.toString('hex').slice(54, 1078)).to.equal('0008000000000010270000120b0000120b00000001000000010000000000002020200028282800393939005656560071717100a0a0a000c3c3c300f2f2f200e5e5e500bebebe0094949400696969004b4b4b003c3c3c003f3f3f00606060006e6e6e009b9b9b00cdcdcd00dbdbdb00ffffff00adadad007e7e7e006a6a6a00565656004242420032323200575757007b7b7b00979797006f6f6f00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000');
        done();
      });
    });
  });
});


// //shouldBeGrey:
// originalMapString = bitmap.toString(54, 1078);
// if originalMapString.match(/(\d+)\1+\1+/g).length === 256
//


//
// describe('Buffer Color Palette Conversion Module', function() {
//   describe('Test for successful inverse conversion', function(done) {
//     it('which should pass if the color has changed correctly', function(err, data) {
//     });
//   });
// });

  //
  // shouldBeInvert = `${}`
  // shouldBeRed = str.match(/255[^255]*/g).length = 256
  // shouldBeGrey = str.match(/(\d+)\1+\1+/g).length = 256;
  //
  // //reverse string d.split('').reverse().join('') Can the same be done on buffer?
  //
  // describe('Testing Module Transforms', function() {
  //   describe('turnBlack switches palette to black', function() {
  //     it('')
  //   });
  // });
