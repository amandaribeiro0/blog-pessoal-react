import React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



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
                        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                           Blog Pessoal
                        </Typography>
                        <Button variant="outlined" color="inherit">Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    )
};