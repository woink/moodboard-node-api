import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes';
import connect from './connect';

require('dotenv').config();

const port = 5000;
const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the homepage');
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));

const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_ADDRS}?retryWrites=true&w=majority`;
connect({ db });
routes(app);
