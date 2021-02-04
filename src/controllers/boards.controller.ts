import Board, { IBoard } from '../models/board.model';

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
