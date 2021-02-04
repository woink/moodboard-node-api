import express from 'express';
import ImagesController from '../controllers/imagesController';

const Router = express.Router();

export default Router.get('/', async (req, res) => {
  const images = await ImagesController.GetImages();
  return res.send({ images });
});
