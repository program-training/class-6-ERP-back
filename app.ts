import dotenv from 'dotenv';
dotenv.config()

import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import productRouter from './api/product/product.router';
import usersRouter from './api/users/users.router';
import { connectToDatabase } from './utils/connections.db';

const port = process.env.PORT

connectToDatabase()

export const app = express();

app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/products', productRouter);

app.use('/api/users', usersRouter);


app.get('/', (req, res) => {
    res.send('Hi we get started !');
});

app.listen(port, () => {
    console.log(`Server listening and running on port ${port}!`)
});