import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from '@mui/material/Stack';


const SignupView = ( ) => {
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }
    return (
        <Grid>
            <Paper style={{padding:"50px", height:"60vh", width:"280px", margin:"0 auto"}}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}></Avatar>
                    <h2 style={headerStyle}>Crea una cuenta nueva</h2>
                    <Typography variant='caption' gutterBottom>Llena los siguientes campos para registrarte</Typography>
                </Grid>
                <form>
                    <TextField fullWidth required label='Nombre Completo' placeholder="Ingresa tu Nombre" margin="dense" />
                    <TextField fullWidth required label='Email' placeholder="Ingresa tu email" margin="dense" />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Sexo:</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial'}} >
                            <FormControlLabel value="Femenino" control={<Radio />} label="Femenino" />
                            <FormControlLabel value="Masculino" control={<Radio />} label="Masculino" />
                        </RadioGroup>
                    </FormControl>
                    <Stack component="form" noValidate spacing={3}>
                        <TextField fullWidth id="date" label="Fecha de Nacimiento" margin="dense" type="date" defaultValue="2017-05-24" InputLabelProps={{shrink: true,}}/>
                    </Stack>
                    <TextField fullWidth label='Contraseña' placeholder="Ingrese su contraseña" margin="dense"/>
                    <TextField fullWidth label='Confirme su Contraseña' placeholder="Confirme su contraseña" margin="dense"/>
                    <Button type='submit' variant='contained' color='primary' style={{margin:"8px"}}>Regístrame</Button>
                </form>
            </Paper>
        </Grid>
    );
}

export default SignupView;