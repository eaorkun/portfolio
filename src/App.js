import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import Navbar from './Navbar';
import About from './About';
import Name from './Name';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © eaorkun'}{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Signature() {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Maintained and Developed by Eralp Orkun'}
      </Typography>
      <Typography sx={{mb: 3 }}variant="body2" color="text.secondary" align="center">
          {'Last Edited: 1/2/2022'}
      </Typography>
    </>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">

        <Name/>
        <About/>
        <Box sx={{ my: 4 }}>    



        </Box>
      </Container>
      <Container maxWidth="sm">
        <Signature />
        <Copyright />
      </Container>



    </>
  );
}
