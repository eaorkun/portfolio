import * as React from 'react';
import Link from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';



export default function About() {
  return (

    <Container maxWidth="md">

        <Typography variant='body1' sx={{ mt: 3, mb: 3 }} color="text.secondary">
        I'm studying Electrical and Computer Engineering at The University of Texas at Austin and am an incoming 
        Software Engineering Intern at Microsoft for this upcoming summer. I've most recently
        worked as an Research and Development intern at Trend Micro.

        </Typography>


        <Typography paragraph={true} variant='body1' sx={{ mt: 3, mb: 3 }} color="text.secondary">
        
        I enjoy creating great software and am interested in the fields of Data Science and AI development.
        Some of my hobbies include performing in the University Orchestra and playing video games online with my close friends.
        </Typography>

    </Container>


  );
}
