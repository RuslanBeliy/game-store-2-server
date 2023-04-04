import { Router } from 'express';
import { gamesController } from '../controllers/games.js';

export const gamesRouter = Router();

gamesRouter.get('/', gamesController.getAll);
gamesRouter.post('/', gamesController.create);
