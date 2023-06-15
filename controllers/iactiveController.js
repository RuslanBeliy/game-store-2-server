import axios from 'axios';

class IactiveController {
  async getAll(req, res) {
    try {
      const formData = new FormData();
      for (const [key, val] of Object.entries(req.body)) {
        formData.append(key, val);
      }
      const { data } = await axios.post('http://a0830433.xsph.ru/', formData);
      res.json(data);
    } catch (e) {
      res.status(500).json({ message: 'Ошибка' });
    }
  }
}

export const iactiveController = new IactiveController();
