import express from 'express';
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { todoRouter } from './routes/todo';

const app = express();
const port = 3000;

app.use(json());
app.use(todoRouter);

mongoose.connect('mongodb://localhost:27017/xendit', {}, () => {
  console.log('connected to database');
})

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
