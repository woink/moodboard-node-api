import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import connect from './connect';
import routes from './routes';

require('dotenv').config();

const app: Application = express();
const port = process.env.SERVER_PORT || 5000;

app
  .use(morgan('dev'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))

  .get('/', (req: Request, res: Response) => {
    res.send('Welcome to MoodboardMaker API');
  })
  // .use('/api/v1/boards', boardRoutes)
  // .use('/api/v1/images', imageRoutes)
  .listen(port, () => console.debug(`Server is listening on port ${port}`));

const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_ADDRS}?retryWrites=true&w=majority`;
connect({ db });
routes({ app });
