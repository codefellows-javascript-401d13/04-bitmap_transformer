'use strict';

const expect = require('chai').expect;
const bitmapFileHelper = require ('../lib/bitmap-helper.js');

describe('testing color-transform.js', function(){
  describe(' Bitmap constructor test', function(){
    it('should return number of colors', function(done){
      bitmapFileHelper.read(`${__dirname}/../img/palette-bitmap.bmp`, function(err, data){
        expect(data.numOfColors).to.equal(256);
        done();
      });
    });

  });
});
describe('testing color-transform.js', function(){
  describe(' Bitmap constructor test', function(){
    it('should return pixel array offset', function(done){
      bitmapFileHelper.read(`${__dirname}/../img/palette-bitmap.bmp`, function(err, data){
        expect(data.pixelArrayOffset).to.equal(1078);
        done();
      });
    });

  });
});
describe('testing color-transform.js', function(){
  describe(' Bitmap constructor test', function(){
    it('should size', function(done){
      bitmapFileHelper.read(`${__dirname}/../img/palette-bitmap.bmp`, function(err, data){
        expect(data.size).to.equal(11078);
        done();
      });
    });

  });
});
describe('testing color-transform.js', function(){
  describe(' Bitmap constructor test', function(){
    it('should return the correct type', function(done){
      bitmapFileHelper.read(`${__dirname}/../img/palette-bitmap.bmp`, function(err, data){
        expect(data.type).to.equal('BM');
        done();
      });
    });

  });
});
// describe('FS Module', function(){
//   describe('with an improper file path', function(){
//     it('should return file path error', function(done){
//       testing color-transform.js('fake.txt', 'file.txt', 'paths.txt', function(err){
//         expect(err).to.be.an('error');
//         done();
//       });
//     });
//   });
//   describe('with an out of order data return', function(){
//     it('should flag it as out of order', function(done){
//       testing color-transform.js('one.txt', 'two.txt', 'three.txt', dataReturn);
//       function dataReturn(err ,data){
//         var testData = new Array('31207468', '3220636f', '74686973');
//         expect(data[0]).to.equal(testData[0]);
//         expect(data[1]).to.equal(testData[1]);
//         expect(data[2]).to.equal(testData[2]);
//         done();
//       }
//     });
//   });
// });
