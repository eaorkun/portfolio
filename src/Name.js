import * as React from 'react';
import Link from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';



export default function About() {
  return (

    <Container maxWidth="md">

        <Typography variant="h3" align='center' sx={{ mt: 6, mb: 0 }}>
        Hello there!            I'm Eralp Orkun
        </Typography>
        
        <Typography variant="h5" align='center' sx={{ mt: 0, mb: 6 }}>
        Student      Software Developer Bassoonist
        </Typography>

    </Container>


  );
}
