import express from 'express';
import boardsController from '../controllers/boardsController';

const router = express.Router();

router
  .get('/', async (req, res) => {
    const boards = await boardsController.getBoards();
    return res.send({ boards });
  })

  .get('/:id', async (req, res) => {
    const board = await boardsController.getBoard(req.params.id);
    return res.send({ board });
  });

export default router;
