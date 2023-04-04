import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';
import multer from 'multer';
import { gamesRouter } from './routes/games.js';
import { authRouter } from './routes/auth.js';
import { ordersRouter } from './routes/orders.js';
config();

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const storage = multer.diskStorage({
  destination: (_, __, cb) => {
    cb(null, 'uploads');
  },
  filename: (_, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/uploads', express.static('uploads'));

app.post('/api/upload', upload.single('image'), (req, res) => {
  res.json({ url: `/uploads/${req.file?.filename}` });
});

app.use('/api/auth', authRouter);
app.use('/api/games', gamesRouter);
app.use('/api/orders', ordersRouter);

mongoose
  .connect(DB_URL)
  .then(() => app.listen(PORT, () => console.log('Server ok')))
  .catch((e) => console.log(e));
