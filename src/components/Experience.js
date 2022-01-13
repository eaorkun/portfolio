import * as React from 'react';
import Link from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { blue } from '@mui/material/colors';

export default function Experience() {
  return (

    <Container maxWidth="md">
        <Typography variant='h4' fontWeight = '500' sx={{mb: 3}}>Work Experience</Typography>



        <Box
        sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            bgcolor: 'primary.main',
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: 3,
            fontWeight: 'bold',
            mb: 4,
        }}
        >
            <Box
            component="img"
            sx={{
                height: 233,
                width: 250,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 350, md: 250 },
                bgcolor: 'white',
            }}
            alt="The house from the offer."
            src={require("../assets/microsoft.png")}
            />
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                m: 3,
                minWidth: { md: 350 },
            }}
            >
                <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
                Summer 2022
                </Box>
                <Box component="span" sx={{ fontSize: 22 }}>
                Incoming Software Engineering Intern
                </Box>
            </Box>
        </Box>

        <Box
        sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            bgcolor: 'primary.main',
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: 3,
            fontWeight: 'bold',
            mb: 4,
        }}
        >
            <Box
            component="img"
            sx={{
                height: 233,
                width: 250,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 250, md: 550 },
                bgcolor: 'white',
            }}
            alt="The house from the offer."
            src={require("../assets/ut.png")}
            ></Box>



            
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                m: 3,
                minWidth: { md: 350 },
            }}
            >
                <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
                Fall 2021
                </Box>
                <Box component="span" sx={{ fontSize: 22 }}>
                Algorithms Teaching Assistant
                </Box>
            </Box>
        </Box>


        <Box
        sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            bgcolor: 'primary.main',
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: 3,
            fontWeight: 'bold',
            mb: 4,
        }}
        >
            <Box
            component="img"
            sx={{
                height: 233,
                width: 250,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 250, md: 550 },
                bgcolor: 'white',
            }}
            src={require("../assets/trend.png")}
            ></Box>



            
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                m: 3,
                minWidth: { md: 350 },
            }}
            >
                <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
                Summer 2021
                </Box>
                <Box component="span" sx={{ fontSize: 22 }}>
                R&D Software Engineering Intern
                </Box>
            </Box>
        </Box>

        <Box
        sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            bgcolor: 'primary.main',
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: 3,
            fontWeight: 'bold',
            mb: 4,
        }}
        >
            <Box
            component="img"
            sx={{
                height: 233,
                width: 250,
                maxHeight: { xs: 233, md: 167 },
                maxWidth: { xs: 250, md: 550 },
                bgcolor: 'white',
            }}
            src={require("../assets/arl.png")}
            ></Box>



            
            <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'flex-start' },
                m: 3,
                minWidth: { md: 350 },
            }}
            >
                <Box component="span" sx={{ fontSize: 16, mt: 1 }}>
                Summer 2019
                </Box>
                <Box component="span" sx={{ fontSize: 22 }}>
                Science and Engineering Apprenti
                </Box>
            </Box>
        </Box>

    </Container>


  );
}
