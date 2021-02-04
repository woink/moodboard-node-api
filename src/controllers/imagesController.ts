import images, { IImage } from '../models/imageModel';

async function getImages(): Promise<IImage[]> {
  return await images
    .find()
    .then((data: IImage[]) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export default {
  getImages,
};
