import { Request, Response, NextFunction } from 'express';
import Board from '../models/boardModel';

async function getBoards(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await Board.find();
    res.send(response);
  } catch (error) {
    next(error);
  }
}

async function getBoard(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await Board.findById(req.params.id);
    res.send(response);
  } catch (error) {
    next(error);
  }
}

async function createBoard(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await Board.create(req.params.title);
    res.send(response);
  } catch (error) {
    next(error);
  }
}

export default {
  getBoards,
  getBoard,
  createBoard,
};
