import { TextField, Button, Container, Typography,Box,Radio,FormLabel, RadioGroup, FormControlLabel } from '@mui/material';
import { useState } from 'react'; 
import { adminRegister, authApiPost } from '../../Api/AuthN-AuthR/RegisterApi.js';
import { useNavigate } from 'react-router-dom';

export function RegisterComponenet() {

  const navigate = useNavigate();
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
  
  const handleChange = (e) => {
    const { name,value } = e.target;

    setRegisterUser(
      {
        ...registerUser,
        [name]:value
      }
    );
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if(registerUser.userName && registerUser.mobileNo && registerUser.email === ''){ return false};
    const response =  await authApiPost(registerUser);

    if(response.code == 1){
      navigate('/auth/login'); 
        setRegisterUser(
          {
            userName:"",
            email:"",
           mobileNo:"",
           password:"",
            confirmPassword:"",
            userRole:""
          }
        );
    }else if(response.code === '400 BAD_REQUEST'){
          
    }   

  }; 
   
    return(
        <Container  sx={
            {
                marginTop:20, 
                display:'flex',
                justifyContent:'center', 
                width:700
            }
        }>
        <form className='d-flex row gap-3 rounded shadow p-5 ' onSubmit={ handleSubmit }>
          <Typography component='h1' variant='h5'>Sign Up</Typography>
          <Box display={'flex'} flexDirection={'column'} className='col-5 '>
          <Typography component='label' variant='label'>Name:</Typography>
          <TextField
            variant="outlined" 
            size='small'
            name='userName'
            onChange={handleChange}
            value={registerUser.userName}
          />
          </Box>
          <Box display={'flex'} flexDirection={'column'}  className='col-5' >
          <Typography component='label' variant='label'>Email:</Typography>
          <TextField
            variant="outlined" 
            size='small'
            name='email'
            onChange={handleChange}
            value={registerUser.email}    
          />
          </Box>
          <Box display={'flex'} flexDirection={'column'} className='col-5'>
          <Typography component='label' variant='label'>Mobile.No:</Typography>
           <TextField
            variant="outlined" 
            size='small'
            name='mobileNo'
            onChange={handleChange}
            value={registerUser.mobileNo}  
          />
          </Box>
          <Box display={'flex'} flexDirection={'column'} className='col-5'>
          <Typography component='label' variant='label'>Password:</Typography>
           <TextField
            variant="outlined" 
            size='small'
            name='password'
            onChange={handleChange}
            value={registerUser.password}
          />
          </Box>
           <Box display={'flex'} flexDirection={'column'} className='col-5'>
           <Typography component='label' variant='label'>Confirm Password:</Typography>
           <TextField
            variant="outlined" 
            size='small'
            name='confirmPassword'
            onChange={handleChange}
            value={registerUser.confirmPassword}
          />
           </Box>
           <Box className='col-5'>
             <FormLabel className='text-dark'>Role:</FormLabel>
             <RadioGroup 
             className='d-flex flex-row'
             name='userRole' 
             onChange={handleChange}
             value={registerUser.userRole}>
                <FormControlLabel value="USER" control={<Radio />} label="USER"/>
                <FormControlLabel value="ADMIN" control={<Radio />} label="ADMIN"/>
             </RadioGroup>
           </Box>
          <Box display={'flex'} justifyContent={'center'} gap={2} marginLeft={14}>
          <Button
            type="button" 
            variant="outlined" 
            size='small' 
            className='border-light'  
            onClick={ () => navigate('/auth/login')}         
          >
            Log In 
          </Button>
          <Button
            type="submit" 
            variant="contained"
            color="primary"
            size='small'            
          >
            Sign Up
          </Button>
          </Box>
        </form>
        
        </Container>
    );
};