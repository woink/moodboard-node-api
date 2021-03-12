import { Request, Response, NextFunction } from 'express';
import Board from '../models/boardModel';
import chalk from 'chalk';

async function getBoards(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await Board.find();
    res.send(response);
  } catch (error) {
    next(chalk.red(error.message));
  }
}

async function getBoard(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await Board.findById(req.params.id);
    res.send(response);
  } catch (error) {
    next(chalk.red(error.message));
  }
}

async function createBoard(req: Request, res: Response, next: NextFunction) {
  try {
    const response = await Board.create(req.params.title);
    res.send(response);
  } catch (error) {
    next(chalk.red(error.message));
  }
}

export default {
  getBoards,
  getBoard,
  createBoard,
};
