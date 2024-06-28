import { getData } from "./datastore";


const uuidv4 = require("uuid/v4")

export const getPhoto = (userId, photoId) => {
    const photo = getData().users[userId].photos.find((e) => e.photoId === photoId);
    if (!photo) {
        return res.status(404).json({ error: 'Photo not found.' });
    }
    return photo;
}

export const uploadPhoto = (userId, encodedPhoto, dateTaken, prompt) => {
    const photoId = uuidv4();
    const data = getData();

    if (!data[userId]) {
        return res.status(404).json({ error: 'User does not exist' });
    }

    data[userId].photos.push({
        photoId: photoId, 
        photo: encodedPhoto, 
        dateTake: dateTaken, 
        prompt: prompt
    })
}