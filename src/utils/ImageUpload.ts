// const cloudinary = require('cloudinary').v2;
// import { CloudinaryStorage } from 'multer-storage-cloudinary';
// import multer from 'multer';
// import fs from 'fs'

// require('dotenv').config();

// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_KEY,
//   api_secret: process.env.CLOUD_SECRET,
// });

// // const cloudStorage = new CloudinaryStorage({
// //   cloudinary,
// //   params: {
// //     allowed_formats: ['jpg', 'png'],
// //     unique_filename: true,
// //     folder: 'moodboard_api',
// //   },
// // });

// const uploads = {}

// const uploadStream = cloudinary.v2.uploader.upload_stream({ tags: 'basic_sample' }, function (err: any, image: any) {
//   if (err) console.warn(err)
//   waitForAllUploads("test", err, image)
// })
// fs.createReadStream('image.jpg').pipe(uploadStream)

// function waitForAllUploads(id: any, err: any, image: any) {
//   uploads[id] = image;
//   var ids = Object.keys(uploads);
//   if (ids.length === 6) {
//     console.log();
//     console.log('**  uploaded all files (' + ids.join(',') + ') to cloudinary');
//   }
// }
// export default multer({ storage: uploadStream });
