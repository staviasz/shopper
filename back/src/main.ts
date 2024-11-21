import express from 'express';
import { env } from './configs/env';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(env.port, () => {
  console.log(`App listening on port ${env.port}`);
});
