import React from 'react';
import { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Login, Signup } from '../component';

function SignInOutContainer() {
  const [value, setValue] = useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
  return (
    <Box sx={{ width: '100%' }}>
    <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
      <Tab label="Login" />
      <Tab label="Signup" />
    </Tabs>
    <TabPanel value={value} index={0}>
      <Login />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Signup />
      </TabPanel>
    </Box>
  )
}

export default SignInOutContainer
