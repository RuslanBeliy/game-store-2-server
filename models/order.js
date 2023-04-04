import { Schema, model } from 'mongoose';
import { GameModel } from './game.js';

const schema = new Schema(
  {
    customer: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
    order: {
      type: [
        {
          _id: Schema.Types.ObjectId,
          name: String,
          price: Number,
          platform: String,
          imageUrl: String,
          amount: Number,
        },
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const OrderModel = model('order', schema);
