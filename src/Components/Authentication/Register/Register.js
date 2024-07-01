import { TextField, Button, Container, Typography,Box,Radio,FormLabel, RadioGroup, FormControlLabel } from '@mui/material'; 
import { authApiPost } from '../../Api/AuthN-AuthR/RegisterApi.js';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export function RegisterComponenet() {

  const navigate = useNavigate();
  
  const initialValues = {
      userName:"",
      email:"",
      mobileNo:"",
      password:"",
      confirmPassword:"",
      userRole:""
    };
  
  const validationSchema = Yup.object(
    {
      userName:Yup.string().required('Name is required*') .matches(
        /^[A-Z][a-zA-Z\d]*$/,
        'Name must start with an uppercase letter'
      ),
      email:Yup.string().required('Email is required*').email('Invalid Email format*'),
      userRole:Yup.string().required('Role is required*'),
      mobileNo:Yup.string().required('Mobile number is required*').matches(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
      password:Yup.string().required('Password is required*')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/,'Password most have [A-z-1-@]').min(8,'Password must be 8 characters*'),
      confirmPassword:Yup.string().required('ConfirmPassword is required*').oneOf([Yup.ref('password'), null], 'Passwords must be same')
    }
  );

  const onSubmit = async (value,{setErrors}) => { 
    const response =  await authApiPost(value); 
    
    if(response.Status === 1){
      navigate('/auth/login');  
    }else if(response.error.code === '400 BAD_REQUEST'){    
        response.error.errorList.forEach( value => {
          if (value==="Error: Duplicate entry {0} for key 'user email'") setErrors({email:'This email is already registered*'});
          if (value===" Duplicate phone number") setErrors({mobileNo:'This number is already registered'});
        });
    }   

  }; 

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  }); 

    return(
        <Container  sx={
            {
                marginTop:20, 
                display:'flex',
                justifyContent:'center', 
                width:700
            }
        }>
        <form className='row  gap-3 rounded shadow p-5 ' onSubmit={formik.handleSubmit}>
          <Typography component='h1' variant='h5'>Sign Up</Typography>
          <Box display={'flex'} flexDirection={'column'} className='col-5 '>
          <Typography component='label' variant='label'>Name:</Typography>
          <TextField
            variant="outlined" 
            size='small'
            name='userName'
            onChange={formik.handleChange}
            value={formik.values.userName}
            onBlur={formik.handleBlur}
            error={formik.touched.userName && formik.errors.userName ? true : false}
            helperText={formik.touched.userName && formik.errors.userName && formik.errors.userName}/>
          </Box>
          <Box display={'flex'} flexDirection={'column'}  className='col-5' >
          <Typography component='label' variant='label'>Email:</Typography>
          <TextField
            variant="outlined" 
            size='small'
            name='email'
            onChange={formik.handleChange}
            value={formik.values.email}    
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email ? true:false}
            helperText={formik.touched.email && formik.errors.email}
          />
          </Box>
          <Box display={'flex'} flexDirection={'column'} className='col-5'>
          <Typography component='label' variant='label'>Mobile.No:</Typography>
           <TextField
            variant="outlined" 
            size='small'
            name='mobileNo'
            onChange={formik.handleChange}
            value={formik.values.mobileNo}  
            onBlur={formik.handleBlur}
            error={formik.touched.mobileNo && formik.errors.mobileNo ? true : false}
            helperText={formik.touched.mobileNo && formik.errors.mobileNo}
          />
          </Box>
          <Box display={'flex'} flexDirection={'column'} className='col-5'>
          <Typography component='label' variant='label'>Password:</Typography>
           <TextField
            variant="outlined" 
            size='small'
            name='password'
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password ? true :false}
            helperText={formik.touched.password && formik.errors.password}
          />
          </Box>
           <Box display={'flex'} flexDirection={'column'} className='col-5'>
           <Typography component='label' variant='label'>Confirm Password:</Typography>
           <TextField
            variant="outlined" 
            size='small'
            name='confirmPassword'
            onChange={formik.handleChange}
            value={formik.values.confirmPassword}
            onBlur={formik.handleBlur}
            error={formik.touched.confirmPassword && formik.errors.confirmPassword ? true : false}
            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
          />
           </Box>
           <Box className='col-5'>
             <FormLabel className='text-dark'>Role:</FormLabel>
             <RadioGroup 
             className='d-flex flex-row'
             name='userRole' 
             onChange={formik.handleChange}
             value={formik.values.userRole}
             onBlur={formik.handleBlur}>
                <FormControlLabel  value="USER" control={<Radio/>} label="USER"/>
                <FormControlLabel value="ADMIN" control={<Radio/>} label="ADMIN"/>
                 {formik.touched.userRole && formik.errors.userRole ? (<span className='text-danger'>{formik.errors.userRole}</span>):null }
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