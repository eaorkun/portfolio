import { red, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// https://coolors.co/


// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#E5D1D0',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#F5E4D7',
    }
  },  
});

export default theme;