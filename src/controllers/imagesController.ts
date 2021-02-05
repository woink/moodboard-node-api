import { Request, Response, NextFunction } from 'express';
import Image from '../models/imageModel';
import upload from '../services/ImageUpload';

async function getImages(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await Image.find();
    res.send(response);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function getImage(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await Image.findById(req.params.id);
    res.send(response);
  } catch (error) {
    console.error(error);
    next(error);
  }
}

async function uploadImage(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await upload.single(req.params.file);
    console.log(response);
    res.send('Successfully uploaded');
  } catch (error) {
    // console.error(error)
    next(error);
  }
}

export default {
  getImages,
  getImage,
  uploadImage,
};
