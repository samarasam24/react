import React from 'react';
import { Grid, TextField, Button, Container, Typography } from '@mui/material';

const ResponsiveForm = () => {
  return (
    <Container maxWidth="sm"  sx={{marginTop:20}}>
        <Grid container spacing={3}>
            <Grid item sm={6} xs={12} >
                <Typography>Material Ui Responsive</Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Typography>Material Ui Responsive</Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Typography>Material Ui Responsive</Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Typography>Material Ui Responsive</Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Typography>Material Ui Responsive</Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Typography>Material Ui Responsive</Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Typography>Material Ui Responsive</Typography>
            </Grid>
            <Grid item sm={6} xs={12}>
                <Typography>Material Ui Responsive</Typography>
            </Grid>
        </Grid>
      {/* <Typography variant="h4" component="h1" gutterBottom>
        Responsive Form
      </Typography>
      <form noValidate autoComplete="off" className='shadow p-5'>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="First Name"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="Last Name"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Email"
              type="email"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Phone Number"
              type="tel"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Address"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="City"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="State"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="Zip Code"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form> */}
    </Container>
  );
};

export default ResponsiveForm;
