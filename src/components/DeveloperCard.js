import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function DeveloperCard() {
  return (
    <Card>
      <CardContent>
        <Typography display="flex" flexDirection="row" justifyContent="space-between" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Bhaskar Bollampalli
          <IconButton display="flex" >
            <CloseIcon />
          </IconButton>
        </Typography>
        <Box pt={4} display="flex" flexDirection="row" justifyContent="flex-start">
        <Typography pr={4} display="flex" flexDirection="column" justifyContent="flex-start" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          GPID
          <strong>5464155</strong>
        </Typography>
        <Typography display="flex" flexDirection="column" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Email
          <strong>bhaskarb@gmail.com</strong>
        </Typography>
        </Box>
        
              </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
