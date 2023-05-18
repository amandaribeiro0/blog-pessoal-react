import React from 'react';
import './CadastroUusuario.css'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function CadastroUsuario() {
    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
                <Grid alignItems='center' xs={6}>
                    <Box paddingX={10}>
                        <form>
                            <Typography variant='h3' gutterBottom component='h3' align='center'>
                                Cadastre-se
                            </Typography>
                            <TextField id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                            <TextField id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <TextField id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                            <Box marginTop={2} textAlign='center'>
                                <Link to='/home'>
                                    <Button type='submit' variant='outlined' disableElevation style={{ color: "#4085aad0", fontWeight: "bolder" }} >Cadastrar</Button>
                                </Link>
                            </Box>
                        </form>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>Já tem uma conta?</Typography>
                            </Box>
                            <Link to='/login'>
                                <Typography variant='subtitle1' gutterBottom align='center'>Faça login aqui!</Typography>
                            </Link>
                        </Box>

                    </Box>

                </Grid>
                <Grid xs={6} className='imagemCadastro'> </Grid>


            </Grid>


        </>
    );
};