import express from 'express';
import boardsController from '../controllers/boardsController';

const router = express.Router();

router.get('/', boardsController.getBoards).get('/:id', boardsController.getBoard);

export default router;
