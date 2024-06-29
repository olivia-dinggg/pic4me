import mongoose from 'mongoose';

const UserSchema = mongoose.Schema(
  {
    uId: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    photos: [{
      type: Schema.Types.ObjectId,
      ref: 'Photo',
    }],
  }
);

export default mongoose.model('User', UserSchema, 'users')