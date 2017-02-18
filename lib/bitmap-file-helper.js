
const fs = require('fs');
const Bitmap = require('../model/bitmap-constructor.js');
const imgReader = module.exports = function(imgPath, transform, newfile){ //eslint-disable-line
  fs.readFile(imgPath, function(err, data){
    if(err) throw err;
    var bit = new Bitmap(data);
    //if(color === 'green') bit.changeGreen
    //if()// more transforms.
    //return bitmap
    var color = '';
    for(let i = 0; i < bit.color.length; i++){
      for(let j = 0; j < bit.color[i].length; j++){
        let temp = bit.color[i][j].toString(16);
        if(temp === '0') temp = '00'
        color += temp;
      }
    }
    var string = bit.head + color + bit.pixel;
    var buff = new Buffer.from(string, 'hex');
    fs.writeFile(`${__dirname}/../img/${newfile}.bmp`, buff, function(err){
      if(err) throw err;
      console.log('wrote the file.');
    });
  });
};
