import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import { Book } from './models/bookModel.js';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';


const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (request, response) => {
  console.log(request.url);
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});


app.use('/books', booksRoute);

mongoose.connect(mongoDBURL).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch((error) => {
  console.log('Error connecting to MongoDB', error);
});