import express from 'express';
import imagesController from '../controllers/imagesController';

const router = express.Router();

router
  .get('/', imagesController.getImages)
  .post('/upload', imagesController.uploadImage)
  .get('/:id', imagesController.getImage);

export default router;
