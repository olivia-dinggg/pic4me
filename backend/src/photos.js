import { getData } from "./datastore.js";
import Photo from './models/Photo.js';
import HTTPError from 'http-errors';

import { v4 as uuidv4 } from 'uuid';

export const photoAdd = async (uId, photo, date) => {
    if (!uId) {
        throw HTTPError(403, 'Invalid user.')
    }

    if (!photo || !date) {
        throw HTTPError(404, 'Please provide a photo & the date.')
    }

    const newPhoto = new Photo({
        pId: uuidv4(),
        user: uId,
        photo: photo,
        date: date,
    })

    try {
        return await newPhoto.save()
    } catch (err) {
        throw HTTPError(404, 'Unable to find user in database.')
    }
}

export const photoFind = async (uId, pId) => {
    try {
        const photo = await Photo.findOne({
            pId: pId,
        })

        if (photo.user !== uId) {
            throw HTTPError(404, 'Forbidden access.')
        }
        
        // The '._doc' method returns the entire Photo schema.
        return photo._doc
    } catch (err) {
        throw HTTPError(404, 'Photo does not exist in the database.')
    }
}