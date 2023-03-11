import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import DefaultData from './Default.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import Routers from './Routers/Routers.js';

const app = express();
mongoose.set('strictQuery', false);
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Routers);

const PORT = process.env.PORT || 8000;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const MONGODB_URI = process.env.MONGODB_URI || `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@testdb4.wpwvkte.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
    DefaultData();
  })
  .catch((error) => {
    console.error('Error connecting to database', error);
  });

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
