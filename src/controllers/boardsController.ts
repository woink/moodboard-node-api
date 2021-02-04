import { Schema } from 'mongoose';
import board, { IBoard } from '../models/boardModel';

async function getBoards(): Promise<IBoard[]> {
  return await board
    .find()
    .then((data: IBoard[]) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

async function getBoard(id: string): Promise<IBoard | null> {
  return await board
    .findById(id)
    .then((data) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export default {
  getBoards,
  getBoard,
};
