import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography, Grid } from '@material-ui/core';
import { Box } from '@mui/material';

import './Footer.css';

export default function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{ backgroundColor: "#03045E", height: "120px" }}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/amandaribeiro0" target="_blank">
                                <GitHubIcon style={{ fontSize: 50, color: "white" }} />
                            </a>
                            <a href="https://www.instagram.com/amaanda.ribeiro/" target="_blank">
                                <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                            <a href="https://www.linkedin.com/in/amanda--costa/" target="_blank">
                                <LinkedInIcon style={{ fontSize: 60, color: "white" }} />
                            </a>
                        </Box>
                    </Box>
                    <Box style={{ backgroundColor: "#0077B6", height: "60px" }}>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2023 Copyright:</Typography>
                        </Box>
                        <Box>
                            <a target="_blank" href="https://www.linkedin.com/in/amanda--costa/">
                                <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">linkedin.com/in/amanda--costa</Typography>
                            </a>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
};