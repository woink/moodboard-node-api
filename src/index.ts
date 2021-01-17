import express, { Request, Response, Application } from 'express';
import bodyParser from 'body-parser';
import { routes } from './routes';
import connect from './connect';
import dotenv from 'dotenv';

// ADD MONGODB

const port = 5000;
const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the homepage');
});

app.listen(port, () => console.log(`Server is listening on port ${port}`));

const db = `mongodb+srv://woink:${process.env.MOODBOARD_PASS}@cluster0.oc0mt.mongodb.net/main?retryWrites=true&w=majority`;
connect({ db });
routes(app);
