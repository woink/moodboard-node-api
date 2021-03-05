import { Request, Response, NextFunction } from 'express';
import Image from '../models/imageModel';
import cloudinary from '../utils/cloudinary';
import chalk from 'chalk';

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
    const fileStr = req.body.data;
    const uploadResponse = await cloudinary.v2.uploader.upload(fileStr);
    const createdImage = await Image.create({
      src: uploadResponse.secure_url,
      height: uploadResponse.height,
      width: uploadResponse.width,
    });
    res.send({ message: `Added ${createdImage} to database` });
    console.info(chalk.green(createdImage));
  } catch (error) {
    next(error);
  }
}

export default {
  getImages,
  getImage,
  uploadImage,
};
