import React from 'react';
import type { NextPage } from 'next';
import { Box, Container, Typography, AppBar } from '@mui/material';
import { FormattedMessage } from 'react-intl';

import LoginForn from 'components/LoginForm';
import LanguageSwitcher from 'components/LanguageSwitcher';

import styles from './styles.module.scss';

const Home: NextPage = () => (
  <Container maxWidth={false} disableGutters>
    <AppBar position="static" className={styles.appBar}>
      <Container maxWidth="lg" className={styles.container}>
        <Typography variant="subtitle1">NextJS Bootstrap</Typography>
        <LanguageSwitcher />
      </Container>
    </AppBar>
    <Container className={styles.heroWrapper} maxWidth="md">
      <Typography variant="h4" color="primary" align="center">
        <FormattedMessage id="app__heroTitle" />
      </Typography>
      <Box display="flex" justifyContent="center" mt={10}>
        <LoginForn />
      </Box>
    </Container>
  </Container>
);

export default Home;
