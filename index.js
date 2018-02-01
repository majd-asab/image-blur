var Jimp = require("jimp");

// This function will open img, blur it and double it's size.
// then it will reopen the same img and place it on top of the
// blured img and crop the top and bottom extra parts.
Jimp.read("img1.jpg", function (err, img) {
 if (err) throw err;
 let x = img.bitmap.width;
 let y = img.bitmap.height;
 img.scale(2)  
 .blur(10)             
 .quality(100)                  
 new Jimp("img1.jpg",function(err,img2){
  img.composite(img2,x/2,y/2)
     .crop(0,  // x-coordinate
          y/2, // y-coordinate
          x*2, // full width of doubled image
           y)  // full height of original image
     .write("blured-double-and-on-top.jpg");
    });
});
