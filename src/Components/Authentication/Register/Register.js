import { TextField, Button, Container, Typography,Box,Radio,FormLabel, RadioGroup, FormControlLabel, Grid, Link } from '@mui/material'; 
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
      const apiError = {};   
        response.error.errorList.forEach( value => {
          if (value==="Error: Duplicate entry {0} for key 'user email'") apiError.email='This email is already registered*';
          if (value===" Duplicate phone number") apiError.mobileNo='This number is already registered';
          if (value==="role is not applicable") apiError.userRole='Admin is already registered';
        });
        setErrors(apiError);
    }   

  }; 

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  }); 

    return(
        <Container maxWidth='sm'   className='shadow py-5 pt-4' sx={
            {
                mt:16, 
                mb:5, 
                width:{
                  xs:300,
                  sm:500,
                  md:800,
                  lg:900
                }
            }
        }>
          <Typography component='h1' variant='h5' textAlign={'start'} color={'secondary'} marginBottom={3}>
            Register
          </Typography>
        <form onSubmit={formik.handleSubmit} autoComplete="on">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography>Name:</Typography>
              <TextField
                variant="outlined"
                size='small'
                fullWidth
                placeholder='Username'
                name='userName'
                onChange={formik.handleChange}
                value={formik.values.userName}
                onBlur={formik.handleBlur}
                error={formik.touched.userName && formik.errors.userName ? true : false}
                helperText={formik.touched.userName && formik.errors.userName && formik.errors.userName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Email:</Typography>
              <TextField
                variant="outlined"
                size='small'
                fullWidth
                placeholder="Email:"
                name='email'
                onChange={formik.handleChange}
                value={formik.values.email}    
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email ? true:false}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography>Mobile.No:</Typography>
              <TextField
                variant="outlined"
                size='small'
                fullWidth
                placeholder="Mobile.No:"
                name='mobileNo'
                onChange={formik.handleChange}
                value={formik.values.mobileNo}  
                onBlur={formik.handleBlur}
                error={formik.touched.mobileNo && formik.errors.mobileNo ? true : false}
                helperText={formik.touched.mobileNo && formik.errors.mobileNo}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Typography>Password:</Typography>
              <TextField
                variant="outlined"
                size='small'
                fullWidth
                placeholder="Password:"
                name='password'
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                error={formik.touched.password && formik.errors.password ? true :false}
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography>Confirm Password:</Typography>
              <TextField
                variant="outlined"
                size='small'
                fullWidth
                placeholder="Confirm Password:"
                name='confirmPassword'
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
                onBlur={formik.handleBlur}
                error={formik.touched.confirmPassword && formik.errors.confirmPassword ? true : false}
                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
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
            </Grid> 
            <Grid item xs={12} sm={12} >
                  <Button
                    type="submit" 
                    variant="contained"
                    color="primary"
                    fullWidth       
                  >
                    Register
                  </Button>
            </Grid> 
            <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                <Typography variant='p'> Already have an account?</Typography>
                <Link
                  type="button" 
                  variant="outlined" 
                  size='small' 
                  className='border-light'  
                  onClick={ () => navigate('/auth/login')}         
                >
                  Log In 
                </Link>
            </Grid>
          </Grid>
        </form>
        
        </Container>
    );
};