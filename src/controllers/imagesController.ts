import Image, { IImage } from '../models/imageModel';

async function getImages(): Promise<IImage[]> {
  return await Image.find()
    .then((data: IImage[]) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

async function getImage(id: string): Promise<IImage | null> {
  return await Image.findById(id)
    .then((data) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export default {
  getImages,
  getImage,
};
