import React from 'react'
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import LoginView from '../views/LoginView';
import SignupView from '../views/SignupView';
import ForgotView from '../views/ForgotView';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const SignInOutContainer=()=>{
const [value,setValue]= React.useState(0);

const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
        <Paper elevation={0} style= {{width:400, margin:"60px auto"}}>
            <Tabs value={value} onChange={handleChange}  style={{textTransform: 'none'}} variant="scrollable"
  scrollButtons="auto" selectionFollowsFocus>
                <Tab label="Iniciar Sesión" style={{textTransform: 'none'}} />
                <Tab label="Regístrarse" style={{textTransform: 'none'}} />
                <Tab label="Recuperar Contraseña" style={{textTransform: 'none'}}/>
            </Tabs>
            <TabPanel value={value} index={0}>
                <LoginView handleChange = {handleChange}/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignupView handleChange = {handleChange}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <ForgotView handleChange = {handleChange}/>
            </TabPanel>
        </Paper>
       
    );

}

export default SignInOutContainer;