import express from 'express';
import morgan from 'morgan';
import connect from './connect';
import routes from './routes';

require('dotenv').config();

const app = express();
const port = process.env.SERVER_PORT || 3001;

app
  .use(morgan('dev'))
  .use(
    express.json({
      limit: '50mb',
    })
  )
  .use(
    express.urlencoded({
      limit: '50mb',
      extended: true,
    })
  )
  .use(routes)
  .use((req, res) => {
    res.status(404).send('Unknown Request');
  })
  .listen(port, () => console.debug(`Server is listening on port ${port}`));

const db = 'mongodb://localhost:27017/moodboard';
connect({ db });
