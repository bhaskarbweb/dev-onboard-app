
import React, {useEffect, useState} from 'react';
import './App.css';
import Catalogmenu from './CatalogMenu';
import {Box, Container} from '@mui/material';
import MainHeader from './components/MainHeader';



function App() {
  return (
    <Box className="App">
      <Container>
        <MainHeader />
      <Catalogmenu />
      </Container>
      

    </Box>
  );
}

export default App;
