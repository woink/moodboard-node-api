import mongoose, { Schema, Document } from 'mongoose';

export interface IImage extends Document {
  src: string;
  public_id: string;
  x?: Number;
  y?: Number;
  height: Number;
  width: Number;
}

const imageSchema: Schema = new Schema(
  {
    src: { type: String, required: true },
    public_id: { type: String, required: true },
    x: { type: Number },
    y: { type: Number },
    height: { type: Number, required: true },
    width: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IImage>('Image', imageSchema);
