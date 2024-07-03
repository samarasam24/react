import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';  
import Button from '@mui/material/Button'; 
import { createTheme,ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';
import { FaReact } from 'react-icons/fa';

const theme = createTheme({
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor:'#1d3144', 
          marginBottom:10
        },
        
    },
    },
    MuiButton:{
        styleOverrides : {
         root : { 
             '&:hover':{
                 color:'orange',
                 borderBottom:'1px solid orange',
                 borderRadius:'0px'
             }
         }
        }
     }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
 

export const MaterialApp = () => { 
  return (
    <ThemeProvider theme={theme}>
      <div>
        <AppBar position="fixed" >
          <Toolbar>
           <FaReact fontSize={27}/>
             <Typography variant='h5' paddingLeft={1}>
               React
             </Typography>
            <div className='mt-2 ms-auto'>
              {/* <Button color="inherit" href='/form'>usestate</Button>
              <Button color="inherit" href='/usereducer/api-form'>usereducer</Button>
              <Button color="inherit" href='/useformik/form'>useformik</Button> */}
              <Button color="inherit" href='/auth/register'>Login</Button>
              <Button color="inherit" href='/auth/register'>Sign Up</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </ThemeProvider>
  );
};
 
