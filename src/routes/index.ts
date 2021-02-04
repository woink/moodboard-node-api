import { TRoutesInput } from '../types/routes';
import ImageRoutes from './imagesRoutes';
import BoardRoutes from './boardsRoutes';

export default ({ app }: TRoutesInput) => {
  app.use('/api/v1/boards', BoardRoutes);
  app.use('/api/v1/images', ImageRoutes);
};
