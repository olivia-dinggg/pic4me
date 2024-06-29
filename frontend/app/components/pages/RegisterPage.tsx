import React from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';
import { router } from 'expo-router';

import PasswordInput from '../objects/PasswordInput';
// import { apiCallPost } from '../../helpers';
import PropTypes from 'prop-types';

const RegisterPage = ({userEmail, setUserEmail, navigation }:any) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    if (userEmail !== '') {
      navigation.navigate('/index');
    }
  }, [userEmail]);

  const register = async () => {
    

    // const data = await apiCallPost('user/auth/register',
    //   {
    //     email,
    //     password,
    //     name,
    //   }, null
    // )

    // if (data.error) {
    //   console.log(`Error: ${data.error}`)
    // } else {
    //   props.setUserEmail(email);
    //   navigation.navigate('/index');
    // }
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

RegisterPage.propTypes = {
  userEmail: PropTypes.string,
  setUserEmailToken: PropTypes.func.isRequired,
};

export default RegisterPage;
