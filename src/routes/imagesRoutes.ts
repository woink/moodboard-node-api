import express from 'express';
import imagesController from '../controllers/imagesController';

const router = express.Router();

router
  .get('/', imagesController.getImages)
  .get('/:id', imagesController.getImage)
  .post('/upload-image', imagesController.uploadImage);

export default router;
