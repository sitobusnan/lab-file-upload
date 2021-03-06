const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');
const multer = require('multer');
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: 321522783486724,
  api_secret: process.env.CLOUDINARY_SECRET
});


var storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'IRONLAB', 
  allowedFormats: ['jpg', 'png'],
  
  filename: function (req, file, cb) {
    cb(null, file.originalname); // The file on cloudinary would have the same name as the original file name
  }
});

const uploadCloud = multer({ storage: storage });

module.exports = uploadCloud;