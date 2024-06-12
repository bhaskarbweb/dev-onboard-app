import React from 'react'
import ApplicationCI from '../components/ApplicationCI'
import Grid from '@mui/material/Grid';
import Sector from '../components/Sector';
import DeveloperName from '../components/DeveloperName';
import DeveloperCard from '../components/DeveloperCard';
import AddDeveloper from '../components/AddDeveloper';

function NonProductionGPID(){
  return (
<Grid container>
<Grid container item spacing={2} xs={12} md={10}>
<Grid item xs={12} md={6}>
<ApplicationCI />
</Grid>

<Grid item xs={12} md={6}>
<Sector />
</Grid>

<Grid item xs={12} md={12}>
<DeveloperName />
</Grid>

<Grid item xs={12} md={4}>
<DeveloperCard />
</Grid>

<Grid item xs={12} md={12}>
<AddDeveloper />
</Grid>
</Grid>

<Grid spacing={2} item xs={12} md={2}>
<div>Selections</div>
</Grid>
</Grid>


  )
}

export default NonProductionGPID