import { Container,Typography,TextField,Button,Box } from "@mui/material"; 
import { apiLoginMethod } from "../../Api/AuthN-AuthR/LoginApi";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup  from 'yup';

export function LoginFormComponent(){

    const navigate = useNavigate();
     
    const initialValues = {
            email:'',
            password:''
         }; 
    const validationSchema = Yup.object(
        {
            email:Yup.string().required('Email is required*'),
            password:Yup.string().required('Password is required*')
        }
    );
    const handleSubmit = async (value,{setErrors}) => { 
       const response  = await  apiLoginMethod(value); 
       
       if(response.code === '400'){ 
        const error = {};
         if(response.message ==='Usernot found.!') error.email='User not found*';
         if(response.message === 'Password is wrong') error.password = 'Password is incorrect*';
         setErrors(error);
       }else{  

        localStorage.setItem('email', response.data.body.userEmail);
        localStorage.setItem('token', response.data.body.jwt);
        if(response.data.body.role === 'ADMIN'){
           navigate('/auth/admin/list');
        }else{
            navigate('/auth/user/data');
        };
       };
    };
    const formik = useFormik(
        {
            initialValues,
            onSubmit:handleSubmit,
            validationSchema
        }
    );
    return(
        <Container 
        sx={
            {
                marginTop:20, 
                display:'flex',
                justifyContent:'center', 
                width:500
            }
        }
        >
            <form className='d-flex row gap-3 rounded shadow p-5 ' onSubmit={formik.handleSubmit}>
                <Typography component='h5' variant='h5'>Log In</Typography>
                <Box display={'flex'} flexDirection={'column'} >
                    <Typography> Email: </Typography>
                    <TextField
                    variant="outlined" 
                    size='small'
                    name='email'
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={formik.touched.email && formik.errors.email ? true:false}
                    helperText={formik.touched.email && formik.errors.email}/>
                </Box>
               <Box display={'flex'} flexDirection={'column'}>
                    <Typography> Password: </Typography>
                    <TextField
                    variant="outlined" 
                    size='small'
                    name='password'
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={formik.touched.password && formik.errors.password ? true:false}
                    helperText={formik.touched.password && formik.errors.password}/>
               </Box>
                <Box display={'flex'} justifyContent={'end'}>
                    <Button 
                    type='Submit'
                    variant='contained'
                    >Log In</Button>
                </Box>
            </form>
        </Container>
    );
};

