import { TextField, Button, Container, Typography,Box,Radio,FormLabel, RadioGroup, FormControlLabel } from '@mui/material';
import { useState } from 'react';

export function LoginComponenet() {

  const [ registerUser,setRegisterUser ] = useState(
    {
      userName:"",
      email:"",
      mobileNo:"",
      password:"",
      confirmPassword:"",
      userRole:""
    }
  );

    return(
        <Container  sx={
            {
                marginTop:20, 
                display:'flex',
                justifyContent:'center', 
                width:700
            }
        }>
        <form className='d-flex row gap-3 rounded shadow p-5 '>
        <Typography component='h1' variant='h5'>Log In</Typography>
        <Box display={'flex'} flexDirection={'column'} className='col-5 '>
        <Typography component='label' variant='label'>Name:</Typography>
        <TextField
          variant="outlined" 
          size='small'
          value={registerUser.userName}
        />
        </Box>
        <Box display={'flex'} flexDirection={'column'}  className='col-5' >
        <Typography component='label' variant='label'>Email:</Typography>
        <TextField
          variant="outlined" 
          size='small'
          value={registerUser.email}
        />
        </Box>
        <Box display={'flex'} flexDirection={'column'} className='col-5'>
        <Typography component='label' variant='label'>Mobile.No:</Typography>
         <TextField
          variant="outlined" 
          size='small'
          value={registerUser.mobileNo}
        />
        </Box>
        <Box display={'flex'} flexDirection={'column'} className='col-5'>
        <Typography component='label' variant='label'>Password:</Typography>
         <TextField
          variant="outlined" 
          size='small'
          value={registerUser.password}
        />
        </Box>
         <Box display={'flex'} flexDirection={'column'} className='col-5'>
         <Typography component='label' variant='label'>Confirm Password:</Typography>
         <TextField
          variant="outlined" 
          size='small'
          value={registerUser.confirmPassword}
        />
         </Box>
         <Box className='col-5'>
           <FormLabel className='text-dark'>Role:</FormLabel>
           <RadioGroup 
           className='d-flex flex-row' 
           value={registerUser.userRole}>
              <FormControlLabel value="USER" control={<Radio />} label="USER"/>
              <FormControlLabel value="ADMIN" control={<Radio />} label="ADMIN"/>
           </RadioGroup>
         </Box>
        <Box>
        <Button
          type="submit" 
          variant="contained"
          color="primary"
          size='small'
           sx={
            {
                alignSelf:'end',
            }
           }
           
        >
          Register
        </Button>
        </Box>
      </form>
        </Container>
    );
};