import config from './config.json' assert { type: "json" };
import express, { json } from 'express';
import cors from 'cors';
import errorHandler from './middleware.js';

const app = express();
app.use(json());
app.use(cors());

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