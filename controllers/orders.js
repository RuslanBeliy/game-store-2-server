import { ordersService } from '../services/orders.js';

class OrdersController {
  async getAll(req, res) {
    try {
      const data = await ordersService.getAll(req.userId);
      res.json(data);
    } catch (e) {
      res.status(500).json({ message: 'Не удалось получить заказы' });
    }
  }
  async create(req, res) {
    try {
      const data = await ordersService.create(req.userId, req.body);
      res.json(data);
    } catch (e) {
      res.status(500).json({ message: 'Не удалось сделать заказ' });
    }
  }
}

export const ordersController = new OrdersController();
