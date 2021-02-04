import express from 'express';
import imagesController from '../controllers/imagesController';

const router = express.Router();

router
  .get('/', async (req, res) => {
    const images = await imagesController.getImages();
    return res.send({ images });
  })

  .get('/:id', async (req, res) => {
    const image = await imagesController.getImages();
    return res.send({ image });
  });

export default router;
