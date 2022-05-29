import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3539BD',
      dark: '#292C98',
    },
    background: {
      default: '#191D25',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '48px',
      fontWeight: '700',
    },
    h2: {
      fontSize: '32px',
      fontWeight: '700',
    },
    h3: {
      fontSize: '22px',
      fontWeight: '700',
    },
  },
});

export default theme;
