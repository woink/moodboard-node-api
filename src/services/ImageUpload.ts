// import S3 from 'aws-sdk/clients/s3'
// import multerS3 from 'multer-s3'
const cloudinary = require('cloudinary').v2;
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

const cloudStorage = new CloudinaryStorage({
  cloudinary,
  params: {
    allowed_formats: ['jpg', 'png'],
    unique_filename: true,
    folder: 'moodboard_api',
  },
});

export default multer({ storage: cloudStorage });
