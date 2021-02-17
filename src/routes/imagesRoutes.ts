import express from 'express';
import imagesController from '../controllers/imagesController';
import { upload } from '../services/ImageUpload';

const router = express.Router();

router
  .get('/', imagesController.getImages)
  .post('/upload', upload.single('image'), imagesController.uploadImage)
  .get('/:id', imagesController.getImage);

export default router;
