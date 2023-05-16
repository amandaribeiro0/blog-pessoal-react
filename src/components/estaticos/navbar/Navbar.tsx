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
                <AppBar className='nav' position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography p={3} variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            Blog Pessoal
                        </Typography>
                        <Box display="flex">
                            <Link to='/home' className='link'>
                                <Typography p={2} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                    Home
                                </Typography>
                            </Link>
                            <Typography p={2} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Postagens
                            </Typography>
                            <Typography p={2} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Temas
                            </Typography>
                            <Typography p={2} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                Cadastrar temas
                            </Typography>
                        </Box>
                        <Link to='/login' className='link'>
                            <Button variant="outlined" disableElevation style={{color:"#4085aad0", fontWeight:"bolder"}}>Logout</Button>
                        </Link>
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    )
};