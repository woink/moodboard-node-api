import express from 'express';
import imageRoutes from './imagesRoutes';
import boardRoutes from './boardsRoutes';

const router = express.Router();

router.use('/api/v1/boards', boardRoutes).use('/api/v1/images', imageRoutes);

export default router;
