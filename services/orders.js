import { OrderModel } from '../models/order.js';

class OrdersService {
  async getAll(userId) {
    const orders = await OrderModel.find({ customer: userId });
    return orders.reverse();
  }

  async create(userId, order) {
    const createdOrder = OrderModel({ customer: userId, order });
    await createdOrder.save();
    return createdOrder;
  }
}

export const ordersService = new OrdersService();
