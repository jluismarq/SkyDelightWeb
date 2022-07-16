import logo from '../assets/img/SkyDelight_logo.png'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';

const LoginView = ({handleChange}) => {

    const [login,setLogin]=React.useState({email:"",password:""})
    const handleEvent=(event)=>{setLogin(previewLogin=>({...previewLogin,[event.target.id]:event.target.value}))}
    const submit = () =>{console.log(login)}

    return (
        <Grid container id="main-container">
            <Paper style={{padding:"50px", height:"60vh", width:"280px", margin:"0 auto"}}>

                <Grid item align='center'>
                    <img className="logo" src={logo} alt="SkyDelight" />
                    <h2>Iniciar Sesión</h2>
                </Grid>

                
                <Grid item>
                    <TextField fullWidth required type="email" id="email" value={login.email} onChange={handleEvent} label="Email" placeholder='Ingrese su correo' variant="outlined" margin="dense" />
                    <TextField fullWidth required id="password" value={login.password} onChange={handleEvent} label="Contraseña" placeholder='Ingrese su contraseña' type="password" autoComplete="current-password" margin="dense" />
                    <FormControlLabel sx={{margin:"0 auto"}} control={<Checkbox defaultChecked />} label="Mantener sesión iniciada" /> 
                </Grid>
                
                <Button  variant="contained" onClick={submit} style={{margin:"8px", textTransform: 'none'}} >Iniciar Sesión</Button>

                <Typography style={{margin:"8px"}}> 
                    <Link href="#" underline="hover" onClick={()=>handleChange("event",1)}>¿No tienes cuenta?</Link> 
               </Typography>
              
                <Typography style={{margin:"8px"}}>
                    <Link href="#" underline="hover" onClick={()=>handleChange("event",2)}>¿Ólvidaste tu contraseña?</Link>
                </Typography>               

                   
            </Paper>
        </Grid>
      );
}

export default LoginView;