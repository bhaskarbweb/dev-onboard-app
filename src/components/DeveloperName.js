import React from 'react'
import {TextField, InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function DeveloperName() {
  return (
    <TextField fullWidth id="outlined-basic" label="Developer Name" variant="outlined" InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon color="primary" />
          </InputAdornment>
        ),
      }} />
  )
}

export default DeveloperName