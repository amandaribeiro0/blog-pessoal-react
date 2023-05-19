import React, {ChangeEvent, useState, useEffect} from 'react';
import './Login.css'
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import UserLogin from '../../models/UserLogin';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../services/Service';


export default function Login() {
    let history = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id:0,
            usuario:'',
            senha:'',
            token:''
        }
    )

    function UpdatedModel(e: ChangeEvent<HTMLInputElement>){
        setUserLogin({
            ...userLogin,
            [e.target.name]:e.target.value
     })
    }
    useEffect(()=>{
        if(token != ''){
            history('/home')
        }
    }, [token])
    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault();
        try{
          await login(`/usuarios/logar`, userLogin, setToken)
            alert("Usuario logado com sucesso!");
        }catch(error){
            alert("Usuario não encontrado")
        }
      // console.log("userLogin:" + Object.values(userLogin))
    }

    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid xs={6} className='imagemLogin'> </Grid>
                <Grid alignItems='center' xs={6}>
                    <Box paddingX={20}>
                        <form onSubmit={onSubmit}>
                            <Typography variant='h3' gutterBottom component='h3' align='center'>
                                Entrar
                            </Typography>
                            <TextField  value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => UpdatedModel(e)} id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                            <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => UpdatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                            <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='outlined' disableElevation style={{ color: "#4085aad0", fontWeight: "bolder" }} >Logar</Button>
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