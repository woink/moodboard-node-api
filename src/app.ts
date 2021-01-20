import express, { Application } from 'express';
import bodyParser from 'body-parser';

import connect from './util/db';
import boardRoutes from './routes/boards';
import imageRoutes from './routes/images';

require('dotenv').config();

const port = process.env.SERVER_PORT;
const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/boards', boardRoutes);
app.use('/api/v1/images', imageRoutes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));

const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_ADDRS}?retryWrites=true&w=majority`;
// connect({ db });
