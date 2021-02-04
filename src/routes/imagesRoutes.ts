import express from 'express';
import imagesController from '../controllers/imagesController';
import upload from '../services/ImageUpload';

const router = express.Router();

router
  .get('/', async (req, res) => {
    const images = await imagesController.getImages();
    return res.send({ images });
  })

  .get('/:id', async (req, res) => {
    const image = await imagesController.getImages();
    return res.send({ image });
  })

  .post('/upload-image', upload.single('image'), (req, res) => {
    console.log(req.file);
  });

export default router;
