import config from './config.json' assert { type: "json" };
import express, { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import errorHandler from './middleware.js';

import Photo from './models/Photo.js'

const app = express();
app.use(json());
app.use(cors());

const main = async () => {
  await mongoose.connect('mongodb+srv://parvyyy:pic4meteam@pic4me.ccztsj4.mongodb.net/')
}

main().catch(err => {
  console.log(err)
})

const db = mongoose.connection;
db.on('error', err => {
  console.log(err)
})

db.once('open', () => {
  console.log('Connected to the database.')
})

const PORT = parseInt(process.env.PORT || config.port);
const HOST = process.env.IP || 'localhost';

// API Endpoints
app.get('/data', (req, res) => {
  res.json(['ex', 'as'])
})

// Middleware must exist AFTER all API endpoints.
app.use(errorHandler());

const server = app.listen(PORT, HOST, () => {
  console.log(`⚡️ Server started on port ${PORT} at ${HOST}`);
});

process.on('SIGINT', () => {
  server.close(() => console.log('Shutting down server gracefully.'));
});