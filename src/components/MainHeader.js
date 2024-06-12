import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function MainHeader() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginBottom:'50px',  bgcolor: 'gray' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Home" />
        <Tab label="About" />
        <Tab label="Services" />
        <Tab label="Careers" />
        <Tab label="Contact US" />
        <Tab label="Social" />
      </Tabs>
    </Box>
  );
}
