import { Container,Typography,TextField,Button,Box } from "@mui/material";
import { useState } from 'react';
import { apiLoginMethod } from "../../Api/AuthN-AuthR/LoginApi";
import { useNavigate } from "react-router-dom";

export function LoginFormComponent(){

    const navigate = useNavigate();
    const [ logData,setLogdata ] = useState(
        {
            email:'',
            password:''
        }
    );
    const handleChange = (e) => {
        const { name,value } = e.target;
        setLogdata(
            {
                ...logData,
                [name]:value
            }
        );
    }; 
    const handleSubmit = async (e) => {
       e.preventDefault(); 
       const response  = await  apiLoginMethod(logData); 
       
       if(response.code === '400'){ 
        alert('Password is Wrong');
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
            <form className='d-flex row gap-3 rounded shadow p-5 ' onSubmit={handleSubmit}>
                <Typography component='h5' variant='h5'>Log In</Typography>
                <Box display={'flex'} flexDirection={'column'} >
                    <Typography> Email: </Typography>
                    <TextField
                    variant="outlined" 
                    size='small'
                    name='email'
                    value={logData.email}
                    onChange={handleChange}/>
                </Box>
               <Box display={'flex'} flexDirection={'column'}>
                    <Typography> Password: </Typography>
                    <TextField
                    variant="outlined" 
                    size='small'
                    name='password'
                    value={logData.password}
                    onChange={handleChange}/>
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

