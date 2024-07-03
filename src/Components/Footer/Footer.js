import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Link, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0a2634',
    },
    secondary: {
      main: '#1a73e8',
    },
  },
});

export const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" color="primary" component="footer" sx={{ top: 'auto', bottom: 0 }}>
        <Container maxWidth="md">
          <Toolbar>
            <Grid container spacing={3} justifyContent="space-between">
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="inherit">
                  Company Name
                </Typography>
                <Typography variant="body2" color="inherit">
                  © 2024 Company Name. All rights reserved.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="inherit">
                  Links
                </Typography>
                <Box>
                  <Link href="#" color="inherit" underline="none">Home</Link>
                </Box>
                <Box>
                  <Link href="#" color="inherit" underline="none">About</Link>
                </Box>
                <Box>
                  <Link href="#" color="inherit" underline="none">Contact</Link>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" color="inherit">
                  Follow Us
                </Typography>
                <Box>
                  <Link href="#" color="inherit" underline="none">Facebook</Link>
                </Box>
                <Box>
                  <Link href="#" color="inherit" underline="none">Twitter</Link>
                </Box>
                <Box>
                  <Link href="#" color="inherit" underline="none">Instagram</Link>
                </Box>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};