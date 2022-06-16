import logo from '../assets/img/SkyDelight_logo.png'
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';


const LoginView = ( ) => {
    const [login,setLogin]=React.useState({email:"",password:""})
    const handleEvent=(event)=>{setLogin(previewLogin=>({...previewLogin,[event.target.id]:event.target.value}))}
    const submit = () =>{console.log(login)}
    return (
        <Grid container id="main-container" justifyContent="center" direction="column" alignItems="center" sx={{marginTop:{xs:"10em", md:"5em"}}}>

        <Grid item  md={4}>
            <img className="logo" src={logo} alt="SkyDelight" />
            <h1>Iniciar Sesión</h1>
        </Grid>

        
        <Grid item>
            <FormGroup sx={{padding:"10px"}}>
                <TextField fullWidth required type="email" id="email" value={login.email} onChange={handleEvent} label="Email" variant="outlined" />
                <TextField fullWidth id="password" value={login.password} onChange={handleEvent} label="Contraseña" type="password" autoComplete="current-password" />
                <FormControlLabel sx={{margin:"0 auto"}} control={<Checkbox defaultChecked />} label="Mantener sesión iniciada" />
            </FormGroup>  
        
        <Grid item>
            <Button fullWidth variant="contained" onClick={submit}>Iniciar Sesión</Button>

        </Grid>
          
        <Typography variant="overline" display="block" gutterBottom>
          ¿Ólvido su contraseña? o Regístrate
        </Typography>
         

        </Grid>

     
       

        </Grid>
      );
}

export default LoginView;