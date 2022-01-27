import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useIntl } from 'react-intl';

import { RootState } from 'store';
import { saveUsername, removeUsername } from 'store/authSlice';

import messages from './messages';
import styles from './styles.module.scss';

const LoginForm = () => {
  const [value, setValue] = useState();
  const { username } = useSelector((state: RootState) => state.auth);

  const { formatMessage } = useIntl();
  const dispatch = useDispatch();

  const handleChange = ({ target: { value: updatedValue } }: any) =>
    setValue(updatedValue);

  const handleLogin = () => dispatch(saveUsername(value));
  const handleLogout = () => dispatch(removeUsername());

  return (
    <Box className={styles.loginForm}>
      {!username && (
        <>
          <Typography mb={3} variant="h4">
            {formatMessage(messages.login)}
          </Typography>
          <TextField
            value={value || ''}
            onChange={handleChange}
            variant="outlined"
            label={formatMessage(messages.username)}
          />
          <Button variant="contained" onClick={handleLogin}>
            {formatMessage(messages.login)}
          </Button>
        </>
      )}
      {username && (
        <>
          <Typography variant="h4">
            {formatMessage(messages.hello, { username })}
          </Typography>
          <Button variant="contained" onClick={handleLogout}>
            {formatMessage(messages.logout)}
          </Button>
        </>
      )}
    </Box>
  );
};

export default LoginForm;
