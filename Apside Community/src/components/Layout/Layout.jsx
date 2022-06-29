import React from 'react';
import Navbar from '../navbar';
import '../Layout/layout.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Sidebar from './sidebar';

function Layout({ children }) {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <><Router>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid xs={12}>
            <Item>
              <Navbar />
            </Item>
          </Grid>
          <Grid xs={2}>
            <Item>
              <Sidebar />
            </Item>
          </Grid>

          <Grid xs={10}>
            <Item>{children}</Item>
          </Grid>
        </Grid>
      </Box>

      {/* <div className='layout-container'>
      <Router>
        <Navbar />
        <div className='body-container'>
          <Sidebar />
          {children}
        </div>
      </Router>
    </div> */} </Router>
    </>
  );
}

export default Layout;
