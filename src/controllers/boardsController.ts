import Board, { IBoard } from '../models/boardModel';

async function getBoards(): Promise<IBoard[]> {
  return await Board.find()
    .then((data: IBoard[]) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

async function getBoard(id: string): Promise<IBoard | null> {
  return await Board.findById(id)
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
