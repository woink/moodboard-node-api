import express, { Application } from 'express';
import bodyParser from 'body-parser';

import connect from './util/db';
import boardRoutes from './routes/boards';
import imageRoutes from './routes/images';

require('dotenv').config();

const port = process.env.SERVER_PORT || 5000;
const app: Application = express();

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))

  .use('/api/v1/boards', boardRoutes)
  .use('/api/v1/images', imageRoutes)

  .listen(port, () => console.log(`Server is listening on port ${port}`));

const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_ADDRS}?retryWrites=true&w=majority`;
connect({ db });
