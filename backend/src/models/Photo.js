import mongoose from 'mongoose';

const PhotoSchema = mongoose.Schema(
  {
    pId: {
      type: String,
      required: true
    },
    uId: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    }
  }
);

export default mongoose.model('Photo', PhotoSchema, 'photos')