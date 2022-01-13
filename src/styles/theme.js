import { red, teal } from '@mui/material/colors';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// https://coolors.co/


// A custom theme for this app
let theme = createTheme({
  palette: {
    mode:"light",
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: '#E5D1D0',
      // light: '#E5D1D0',
      // dark: '#E5D1D0',
    },
    secondary: {
      main: '#19857b',
      // light: '#19857b',
      // dark: '#19857b',
    },
    error: {
      main: red.A400,
      // light: red.A400,
      // dark: red.A400,
    },
    warning: {
      main: red.A400,
      // light: red.A400,
      // dark: red.A400,
    },
    info: {
      main: red.A400,
      // light: red.A400,
      // dark: red.A400,
    },
    success: {
      main: red.A400,
      // light: red.A400,
      // dark: red.A400,
    },
    background: {
      default: '#F5E4D7',
    }
  },  
  typography: {
    fontSize: 14,
    fontWeightLight: 400, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 400, // Roboto Condensed
    fontWeightBold: 700,
    // fontFamily: "Roboto", "Helvetica", "Arial", sans-serif",
    // fontFamily: "'Work Sans', sans-serif",
    // fontFamily: "'Roboto Condensed', sans-serif",
    textTransform: 'uppercase',
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    poster: {
      color: 'red',
    },
    // h1: {
    //   fontWeight: 600,
    //   fontSize: 60,
    // },
    // h2: {
    //   fontWeight: 600,
    //   fontSize: 60,
    // },
    // h3: {
    //   fontWeight: 600,
    //   fontSize: 60,
    // },
    // h4: {
    //   fontWeight: 600,
    //   fontSize: 60,
    // },
    // h5: {
    //   fontWeight: 600,
    //   fontSize: 60,
    // },
    // h6: {
    //   fontWeight: 600,
    //   fontSize: 60,
    // },
    // subtitle1: {
    //   fontWeight: 600,
    //   fontSize: 60,
    // },
    // body1: {
    //   fontWeight: 600,
    //   fontSize: 60,
    // },
    // body2: {
    //   fontWeight: 600,
    //   fontSize: 60,
    // },
  },
});

theme = responsiveFontSizes(theme);

export default theme;