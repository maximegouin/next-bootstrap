import { createTheme, Theme } from '@mui/material/styles';

// Default MUI theme
const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#fff !important',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          borderBottom: '2px solid #fff',
          backgroundColor: '#0e0e0e',
        },
      },
    },
  },
});

export default theme;
