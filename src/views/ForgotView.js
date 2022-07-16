import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from '@mui/material/Link';

const ForgotView = ({handleChange}) => {
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#0078AA' }
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper style={{padding:"50px", height:"60vh", width:"280px", margin:"0 auto"}}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2 style={headerStyle}>Recuperar Contraseña</h2>
                    <Typography variant='caption' gutterBottom>Ingresa el email con el que te registraste</Typography>
                </Grid>
                <form>
                    <TextField fullWidth required label='Email' placeholder="Ingresa tu email" margin="dense" />
                    <Button type='submit' variant='contained' color='primary' style={{margin:"8px", textTransform: 'none'}}>Recuperar</Button>
                </form>
                <Typography style={{margin:"8px"}} align="right">
                    <Link href="#" underline="hover" onClick={()=>handleChange("event",0)} >Ir a Iniciar Sesión</Link>
                </Typography> 
            </Paper>
        </Grid>
    );
}

export default ForgotView;