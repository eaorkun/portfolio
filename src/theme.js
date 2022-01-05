import { red, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#fffdf0',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fffdf0',
    }
  },  
});

export default theme;