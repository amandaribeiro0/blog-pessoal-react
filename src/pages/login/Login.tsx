import React from 'react';
import './Login.css'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Login() {
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid xs={6} className='imagemLogin'> </Grid>
                <Grid alignItems='center' xs={6}>
                    <Box paddingX={20}>
                        <form>
                            <Typography variant='h3' gutterBottom component='h3' align='center'>
                                Entrar
                            </Typography>
                            <TextField id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <Box marginTop={2} textAlign='center'>
                                <Link to='/home'>
                                    <Button type='submit' variant='outlined' disableElevation style={{ color: "#4085aad0", fontWeight: "bolder" }} >Logar</Button>
                                </Link>
                            </Box>
                        </form>

                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                            </Box>
                            <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center'>Cadastre-se aqui!</Typography>
                            </Link>
                            
                        </Box>
                    </Box>

                </Grid>
                
            </Grid>

        </>
    )
};