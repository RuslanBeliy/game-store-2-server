import { Router } from 'express';
import { ordersController } from '../controllers/orders.js';
import { checkAuthorization } from '../utils/checkAuthorization.js';

export const ordersRouter = Router();

ordersRouter.get('/', checkAuthorization, ordersController.getAll);
ordersRouter.post('/', checkAuthorization, ordersController.create);
