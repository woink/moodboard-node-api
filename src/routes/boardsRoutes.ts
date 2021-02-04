import express from 'express';
import BoardsController from '../controllers/boardsController';

const Router = express.Router();

export default Router.get('/', async (req, res) => {
  const boards = await BoardsController.GetBoards();
  return res.send({ boards });
});
