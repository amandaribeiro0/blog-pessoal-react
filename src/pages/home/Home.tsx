import React from 'react';
import './Home.css';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';

import imagem from '../../assets/images/home-img.svg';

export default function Home() {
    return (
        <>
         <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#90E0EF" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ border: " 2px solid black", backgroundColor: "#0077B6", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src={imagem} alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
          
        </>)

};