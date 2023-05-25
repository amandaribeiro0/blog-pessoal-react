import React, { useEffect } from 'react';
import './Home.css';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';

import imagem from '../../assets/images/home-img.svg';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/token/Reducer';
import { toast } from 'react-toastify';

export default function Home() {

    let navigate = useNavigate();
    // const [token, setToken] = useLocalStorage('token');

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    )
    useEffect(() => {
        if (token == "") {
            // alert("Você precisa estar logado")
            toast.error('Você precisa estar logado',{
                position:"top-right",
                autoClose:2000,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:true,
                draggable:false,
                theme:"colored",
                progress:undefined
            })
            navigate("/login")

        }
    }, [token])
    return (

        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='bemVindo'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom component="h3" align="center" style={{ color: "#03045E", fontWeight: "bold" }}>Bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom component="h5" align="center" style={{ color: "#03045E", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to='/postagens'>
                            <Button variant="outlined" className='buttonPost' style={{ border: " 2px solid black", backgroundColor: "#0077B6", color: "white" }}>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src={imagem} alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                    <TabPostagem />
                </Grid>
            </Grid>

        </>)

};