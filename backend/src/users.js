import User from './models/User.js';
import validator from 'validator';
import { v4 as uuidv4 } from 'uuid';
import CryptoJS from 'crypto-js';
import createError from 'http-errors';

export const userRegister = async (email, name, password) => {
  console.log(email, name, password)
  if (!email || !name || !password) {
    throw Error('Please fill out all inputs.');
  }

  if (!validator.isEmail(email)) {
    throw Error('The email entered is invalid.');
  }

  if (isAvailableEmail(email)) {
    console.log()
    throw Error('The email entered is already used. Please sign in.');
  }

  const newUser = new User({
    uId: uuidv4(),
    email: email,
    name: name,
    password: String(CryptoJS.HmacSHA256(password, 'pic4me')),
  })

  try {
    return await newUser.save()
  } catch (err) {
    console.log(err);
    throw next(createError(404, 'Unable to save user in database.'))
  }
};

const isAvailableEmail = async (email) => {
  console.log('Entered')
  try {
    console.log('Entered3')
    const user = await User.findOne({ email: email });
    console.log('Entered2')
    console.log(user);

    return user === null;
  } catch (error) {
    console.log(`Error is ${error}`)
    throw next(createError(400, 'There was an error when validating the email.'));
  }
}

