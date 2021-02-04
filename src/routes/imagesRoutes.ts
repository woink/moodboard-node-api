import express from 'express';
import imagesController from '../controllers/imagesController';

const router = express.Router();

router.get('/', imagesController.getImages);

export default router;
