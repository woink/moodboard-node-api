import { Request } from 'supertest';
import Image, { IImage } from '../models/imageModel';
import upload from '../services/ImageUpload';

async function getImages() {
  return await Image.find()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
}

async function getImage(id: string) {
  return await Image.findById(id)
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw error;
    });
}

async function uploadImage(req: string) {
  return await upload.single(req);
}

export default {
  getImages,
  getImage,
  uploadImage,
};
