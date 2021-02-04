import { TRoutesInput } from '../types/routes';
import BoardsController from '../controllers/boards.controller';
import ImagesController from '../controllers/images.controller';

export default ({ app }: TRoutesInput) => {
  app
    .get('/api/v1/boards', async (req, res) => {
      const boards = await BoardsController.GetBoards();
      return res.send({ boards });
    })

    .get('/api/v1/images', async (req, res) => {
      const images = await ImagesController.GetImages();
      return res.send({ images });
    });
};
