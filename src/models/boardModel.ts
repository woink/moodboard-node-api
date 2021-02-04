import mongoose, { Schema, Document } from 'mongoose';
import { IImage } from './imageModel';

export interface IBoard extends Document {
  title: string;
  images: [IImage['_id']];
}

const BoardSchema: Schema = new Schema({
  title: { type: String, required: true, unique: true },
  images: { type: Schema.Types.ObjectId },
});

export default mongoose.model<IBoard>('Board', BoardSchema);
