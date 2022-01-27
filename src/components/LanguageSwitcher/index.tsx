import React, { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Menu, MenuItem, Box } from '@mui/material';

import FR from 'assets/icons/fr.svg';
import US from 'assets/icons/us.svg';

import { changeLocale } from 'store/authSlice';
import { RootState } from 'store';

import styles from './styles.module.scss';

const LanguageSwitcher = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const { locale } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLocale = useCallback(
    (updatedLocale) => {
      dispatch(changeLocale(updatedLocale));
      handleClose();
    },
    [dispatch]
  );

  return (
    <Box className={styles.languageSwitcher}>
      <Button onClick={handleClick}>{locale === 'en' ? <US /> : <FR />}</Button>
      <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
        {locale !== 'en' && (
          <MenuItem
            className={styles.menuItem}
            onClick={() => handleLocale('en')}
          >
            <US />
          </MenuItem>
        )}
        {locale !== 'fr' && (
          <MenuItem
            className={styles.menuItem}
            onClick={() => handleLocale('fr')}
          >
            <FR />
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};

export default LanguageSwitcher;
