import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './App.css';
import NonProductionGPID from './catalogs/NonProductionGPID';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Catalogmenu() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{  display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="contained"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab variant="contained" label="Non-Prodcution GPID" {...a11yProps(0)} />
        <Tab label="Service Account" {...a11yProps(1)} />
        <Tab label="AD Group Management" {...a11yProps(2)} />
        <Tab label="Azure devops" {...a11yProps(3)} />
        
      </Tabs>
      <TabPanel value={value} index={0}>
        <NonProductionGPID />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Service Account
      </TabPanel>
      <TabPanel value={value} index={2}>
        AD Group Management
      </TabPanel>
      <TabPanel value={value} index={3}>
        Azure devops 
      </TabPanel>
    </Box>
  );
}
