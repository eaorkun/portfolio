import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import ProTip from './components/ProTip';
import Navbar from './components/Navbar';
import About from './components/About';
import Experience from './components/Experience';
import Name from './components/Name';
import Projects from './components/Projects';

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
        <Experience/>
        <Projects/>
      </Container>
      <Container maxWidth="sm">
        <Signature />
        <Copyright />
      </Container>



    </>
  );
}
