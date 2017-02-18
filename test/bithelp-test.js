'use strict';

const expect = require('chai').expect;
const bitmapFileHelper = require ('../lib/bitmap-helper.js');

describe('fileReader', function(){
 describe(' file is being read', function(){
   it('should return file has been read', function(done){
    bitmapFileHelper.read(`${__dirname}/../img/palette-bitmap.bmp`, function(err, data){
    expect(data.numOfColors).to.equal(256);
    done();
    });
   });

});

});
// describe('FS Module', function(){
//   describe('with an improper file path', function(){
//     it('should return file path error', function(done){
//       fileReader('fake.txt', 'file.txt', 'paths.txt', function(err){
//         expect(err).to.be.an('error');
//         done();
//       });
//     });
//   });
//   describe('with an out of order data return', function(){
//     it('should flag it as out of order', function(done){
//       fileReader('one.txt', 'two.txt', 'three.txt', dataReturn);
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


