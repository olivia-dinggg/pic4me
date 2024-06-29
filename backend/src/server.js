import config from './config.json' assert { type: "json" };
import express, { json } from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import multer from 'multer';
import errorHandler from './middleware.js';
import { getData, loadData } from './datastore.js';

import { userRegister } from './users.js';
import { photoAdd, photoFind, photoForToday } from './photos.js';

const upload = multer()
const app = express();
app.use(json());
app.use(cors());
app.use(morgan('dev'));

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
app.post('/auth/register', upload.none(), (req, res) => {
  const { email, name, password } = req.body;
  try {
    res.json(userRegister(email, name, password));
  } catch (err) {
    next(err)
  }
});

app.post('/photo', upload.none(), (req, res) => {
  const { uId, photo, date } = req.body;
  res.json(photoAdd(uId, photo, date));
});

app.get('/photo', (req, res) => {
  const { uId, pId } = req.body;
  res.json(photoFind(uId, pId));
});

app.get('/photo', (req, res) => {
  const { uId } = req.body;
  res.json(photoForToday(uId));
});

// Middleware must exist AFTER all API endpoints.
app.use((err, req, res, next) => {
  // Render the error page
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const server = app.listen(PORT, HOST, () => {
  console.log(`⚡️ Server started on port ${PORT} at ${HOST}`);
});

process.on('SIGINT', () => {
  server.close(() => console.log('Shutting down server gracefully.'));
  db.close();
});