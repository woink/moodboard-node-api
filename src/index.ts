import express, { Application } from 'express';
import bodyParser from 'body-parser';

import connect from './connect';
import boardRoutes from './routes/boards';

require('dotenv').config();

const port = process.env.SERVER_PORT;
const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1/boards', boardRoutes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));

const db = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_ADDRS}?retryWrites=true&w=majority`;
connect({ db });
// routes(app);
