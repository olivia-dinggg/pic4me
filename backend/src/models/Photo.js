import mongoose from 'mongoose';

const PhotoSchema = mongoose.Schema(
  {
    p_id: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
    prompt: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    }
  }
);

export default mongoose.model('Photo', PhotoSchema, 'photos')