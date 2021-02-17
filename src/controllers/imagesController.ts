import { Request, Response, NextFunction } from 'express';
import Image from '../models/imageModel';

async function getImages(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await Image.find();
    res.send(response);
  } catch (error) {
    next(error);
  }
}

async function getImage(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await Image.findById(req.params.id);
    res.send(response);
  } catch (error) {
    next(error);
  }
}

async function uploadImage(req: Request, res: Response, next: NextFunction) {
  try {
    res.send('Successfully uploaded');
  } catch (error) {
    console.log('made it here');
    console.error(error);
    next(error);
  }
}

export default {
  getImages,
  getImage,
  uploadImage,
};
