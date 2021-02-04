import Image, { IImage } from '../models/image.model';

async function GetImages(): Promise<IImage[]> {
  return await Image.find()
    .then((data: IImage[]) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export default {
  GetImages,
};
