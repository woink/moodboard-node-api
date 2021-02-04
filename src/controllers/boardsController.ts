import Board, { IBoard } from '../models/boardModel';

async function GetBoards(): Promise<IBoard[]> {
  return await Board.find()
    .then((data: IBoard[]) => {
      return data;
    })
    .catch((error: Error) => {
      throw error;
    });
}

export default {
  GetBoards,
};