import React from 'react'
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import LoginView from '../views/LoginView';
import SignupView from '../views/SignupView';

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
          <Box sx={{ p: 3 }}>
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
        <Paper square>
            <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                <Tab label="Active" />
                <Tab label="Active" />
            </Tabs>
            <TabPanel value={value} index={0}>
                <LoginView/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SignupView/>
            </TabPanel>
        </Paper>
       
    );

}

export default SignInOutContainer;