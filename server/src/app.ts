import express, { type Request, type Response } from 'express';
import { redirectLink, shortLink } from './controllers/linkController.js';
import { validateUrl } from './middlewares/validateUrl.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const db = process.env.DATABASE || '';
await mongoose.connect(db);

app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);

app.use(express.json());

app.post('/shorten', validateUrl, shortLink);
app.get('/:shortId', redirectLink);

app.use((_, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.use((err: any, req: Request, res: Response) => {
  res.status(500).json({ error: err.message || 'Internal server error' });
});

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
