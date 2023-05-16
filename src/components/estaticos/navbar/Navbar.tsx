import React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';



export default function Navbar() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className='nav' position="static" color='secondary'>
                    <Toolbar >
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 3 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box style={{ cursor: "pointer" }} >
                            <Typography variant="h5" color="inherit">
                                Blog Pessoal
                            </Typography>
                        </Box>

                        <Box p={3} display="flex" justifyContent="start">
                            <Link to='/home' className='link'>
                                <Box mx={1} style={{ cursor: "pointer" }}>
                                    <Typography variant="h6" color="inherit">
                                        Home
                                    </Typography>
                                </Box>
                            </Link>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Postagens
                                </Typography>
                            </Box>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Temas
                                </Typography>
                            </Box>
                            <Box mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="inherit">
                                    Cadastrar tema
                                </Typography>
                            </Box>
                        </Box>
                        <Link className='login' to='/login' >
                            <Button className='buttonLogout' variant="outlined" color="inherit">Logout</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    )
};