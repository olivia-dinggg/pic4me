import config from './config.json' assert { type: "json" };
import express, { json } from 'express';
import cors from 'cors';
import errorHandler from './middleware.js';
import { getData, loadData } from './datastore.js';

const app = express();
app.use(json());
app.use(cors());

loadData();

const PORT = parseInt(process.env.PORT || config.port);
const HOST = process.env.IP || 'localhost';

// API Endpoints
app.get('/data', (req, res) => {
  res.json(['ex', 'as'])
});

app.get('/photo', (req, res) => {
    // Extracting user and photoID from query parameters
    const userId = req.query.userId;
    const photoId = req.query.photoId;

    // Check if both parameters are present
    if (!userId || !photoId) {
        return res.status(400).json({ error: 'Both userId and photoId parameters are required.' });
    }

    res.json(getPhoto(userId, photoId));
});


app.post('/photo', (req, res) => {
    const { userId, encodedPhoto, dateTaken, prompt } = req.body;

    if (!userId || !encodedPhoto || !dateTaken || !prompt) {
        return res.status(400).json({ error: 'userId, encodedPhoto, dateTaken and prompt parameters are required for POST request.' });
    }

    res.json(postPhoto(userId, encodedPhoto, dateTaken, prompt));
});

// Middleware must exist AFTER all API endpoints.
app.use(errorHandler());

const server = app.listen(PORT, HOST, () => {
  console.log(`⚡️ Server started on port ${PORT} at ${HOST}`);
});

process.on('SIGINT', () => {
  server.close(() => console.log('Shutting down server gracefully.'));
});