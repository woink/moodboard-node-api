import express from 'express';
import boardsController from '../controllers/boardsController';

const router = express.Router();

router
  .get('/', boardsController.getBoards)
  .post('/create', boardsController.createBoard)
  .get('/:id', boardsController.getBoard)
  .delete('/:id', boardsController.deleteBoard);

export default router;
