import express, { Application } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import connect from './connect';
import imageRoutes from './routes/imagesRoutes';
import boardRoutes from './routes/boardsRoutes';

require('dotenv').config();

const app: Application = express();
const port = process.env.SERVER_PORT || 5000;

app
  .use(morgan('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))

  .use('/api/v1/boards', boardRoutes)
  .use('/api/v1/images', imageRoutes)

  .listen(port, () => console.debug(`Server is listening on port ${port}`));

// const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_ADDRS}?retryWrites=true&w=majority`;

const db = 'mongodb://localhost:27017/moodboard';
connect({ db });
