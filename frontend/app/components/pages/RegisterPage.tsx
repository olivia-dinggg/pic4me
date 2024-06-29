import React from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';
import { apiCallPost } from '@/scripts/helpers';

import PasswordInput from '../objects/PasswordInput';
// import { apiCallPost } from '../../helpers';
import PropTypes from 'prop-types';

const RegisterPage = ({ navigation, userEmail, setUserEmail }:any) => {
  console.log(`type of setUserEmail is ${typeof setUserEmail}`)
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    if (userEmail !== '') {
      navigation.navigate('/index');
    }
  }, [userEmail]);

  const register = async () => {
    const data = await apiCallPost('/auth/register',
      {
        email,
        name,
        password,
      }
    )

    if (data.error) {
      console.log(`Error: ${data.error}`)
    } else {
      setUserEmail(email);
      navigation.navigate('/index');
    }
  }
  const inputStyle = { width: '50%', mb: '16px' }

  return (
    <Paper sx={{ height: '80%' }} elevation={2}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="50dvh"
        flexDirection="column"
        gap={1}
      >
        <h1>Registration Page</h1>
        <TextField
          label='Name'
          variant='outlined'
          value={name}
          onChange={e => setName(e.target.value)}
          sx={inputStyle} />
        <TextField
          label='Email' variant='outlined'
          value={email}
          onChange={e => setEmail(e.target.value)}
          sx={inputStyle} />
        <PasswordInput sx={inputStyle}
          onChange={e => setPassword(e.target.value)}
          label='Password'
        />
        <Button
          variant='contained'
          onClick={register}
          sx={{ bgcolor: '#40a162', width: '25%', height: '40px' }}>Register</Button>
      </Box >
    </Paper >
  );
};

export default RegisterPage;
