import mongoose, { Schema, Document } from 'mongoose';

export interface IImage extends Document {
  src: string;
  x: Number;
  y: Number;
  height: Number;
  width: Number;
}

const imageSchema: Schema = new Schema({
  src: { type: String, required: true },
  x: { type: Number },
  y: { type: Number },
  height: { type: Number },
  width: { type: Number },
});

export default mongoose.model<IImage>('Image', imageSchema);
