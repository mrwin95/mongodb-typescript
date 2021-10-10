import * as express from 'express';
import { connect  } from './database/mongodb';
import * as Mongoose from 'mongoose';
const app = express();

const port = 5002;

connect();

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});