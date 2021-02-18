import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import connect from './connect';
import routes from './routes';
import cors from 'cors';

require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT || 5000;

app
  .use(morgan('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(cors())
  // .use(express.static('public'))
  .use(routes)
  .use((req, res) => {
    res.status(404).send('Unknown Request');
  })
  .listen(port, () => console.debug(`Server is listening on port ${port}`));

const db = 'mongodb://localhost:27017/moodboard';
connect({ db });
