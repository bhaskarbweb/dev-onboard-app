import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Sector() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Sector" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'India', year: 1994 },
  { label: 'USA', year: 1972 },
  { label: 'Canada', year: 1974 },
  { label: 'Germany', year: 2008 },
 { label: 'Australia', year: 1975 },
];