import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';

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
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" align='center' gutterBottom>
          Eralp Orkun
        </Typography>
        <Signature />
        <Copyright />
      </Box>
    </Container>
  );
}
