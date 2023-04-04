import { gamesService } from '../services/games.js';

class GamesController {
  async getAll(req, res) {
    try {
      const data = await gamesService.getAll(req.query);
      res.json(data);
    } catch (e) {
      res.status(500).json({ message: 'Не удалось получить список игр' });
    }
  }
  async create(req, res) {
    try {
      const data = await gamesService.create(req.body);
      res.json(data);
    } catch (e) {
      res.status(500).json({ message: 'Не удалось создать игру' });
    }
  }
}

export const gamesController = new GamesController();
