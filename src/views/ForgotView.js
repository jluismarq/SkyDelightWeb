import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const ForgotView = ( ) => {
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#0078AA' }
    {/*const marginTop = { marginTop: 5 }*/}
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
                    <Button type='submit' variant='contained' color='primary' style={{margin:"8px"}}>Recuperar</Button>
                </form>
            </Paper>
        </Grid>
    );
}

export default ForgotView;