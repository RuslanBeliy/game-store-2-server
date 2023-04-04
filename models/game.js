import { model, Schema } from 'mongoose';

const schema = new Schema({
  name: { type: String, required: true },
  ageLimit: { type: Number, required: true },
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
  genre: { type: String, required: true },
  platform: { type: [String], required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, default: 1 },
});

export const GameModel = model('game', schema);
