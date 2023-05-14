import React from 'react';
import './Home.css'
import { Button, Grid, Paper } from '@material-ui/core';
import { Box } from '@mui/material';

export default function Home() {
    return (
        <>
            <Paper>
                <Box p={2}>
                    <Box display="flex" justifyContent="center">
                        <h1>Title</h1>
                    </Box>
                    <img  src="https://s2-gshow.glbimg.com/wUFjjPNIoBPYZ1kZ_d3KU30jOok=/0x0:1440x1791/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2022/8/i/TfLdc1QgSYQGIwAiSwUA/fas-reclamam-do-sumico-de-justin-bieber-evanpaterakis.jpg" 
                    alt='Justin Bieber' style={{width:"100%", height:"100%"}}/>
                    <Box display="flex" justifyContent="center" p={2}>
                        <Button variant='contained' color='primary'>Aceitar </Button>
                        <Button  variant='contained' color='secondary'>Recusar</Button>
                    </Box>
                </Box>
            </Paper>
        </>)

};