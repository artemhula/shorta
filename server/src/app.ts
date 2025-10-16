import express from 'express';
import { shortLink } from './controllers/linkController.js';
import { validateUrl } from './middlewares/validateUrl.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/shorten', validateUrl, shortLink);

app.listen(port, () => {
  console.log(`app started on port ${port}`);
});
