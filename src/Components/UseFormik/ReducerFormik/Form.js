import  TextField  from "@mui/material/TextField";
import  Box  from "@mui/material/Box";
import  shadows from "@mui/material/styles/shadows";
import  Button  from "@mui/material/Button";  
import { addUser, addUserDetail, editUser } from "./Action/Action";
import { useEffect, useReducer } from "react";
import { Reducer, userDetails } from "./Reducer/Reducer";
import { useNavigate, useParams } from "react-router-dom";
import { apiGetByIdMethod } from "../../Api/MockApi";
import { ADD_USEREMAIL, ADD_USERNAME, ADD_USERNUMBER, ADD_USERPASSWORD } from "./Type/Type";
import { useFormik } from "formik";
import * as Yup from 'yup';
 
 export function FormikReducerAPi(){ 

    const {id} = useParams();
    const navigate = useNavigate();
    const [user,dispatch] = useReducer( Reducer,userDetails );
    
    const handleChange = (e) => {
        const {name,value} = e.target;
        dispatch(addUserDetail(name,value));
        formik.setFieldValue(name, value);
    }; 
    const handleSubmit = ( ) => {
   
       if( id !== undefined){
        dispatch(
            editUser(
                id,
                {
                    userName:user.userName,
                    userPassword:user.userPassword,
                    userEmail:user.userEmail,
                    userNumber:user.userNumber,
                }
            )
        );
       }else{
        dispatch(
            addUser(
                {
                    userName:user.userName,
                    userPassword:user.userPassword,
                    userEmail:user.userEmail,
                    userNumber:user.userNumber,
                }
            )
        );
       };
        navigate('/useformik/reducer-form/table'); 
    };
     
    const fetchData = async () => {
        const response = await apiGetByIdMethod(id);
        dispatch({type:ADD_USERNAME,payload:response.userName});
        dispatch({type:ADD_USERPASSWORD,payload:response.userPassword});
        dispatch({type:ADD_USEREMAIL,payload:response.userEmail});
        dispatch({type:ADD_USERNUMBER,payload:response.userNumber});
    };

    

    useEffect(
        () => {
            if( id  !== undefined )  fetchData() ;
        },[]
    );

    const validationSchema = Yup.object(
        {
            userName: Yup.string().required('Name is Required'),
            userPassword: Yup.string().required('Password is Required'),
            userEmail: Yup.string().email('Invalid Email Format').required('Email is Required'),
            userNumber: Yup.number().required('Number is Required').positive().integer(),
        }
    );
    const formik = useFormik(
        {
            initialValues:user,
            enableReinitialize:true,
            validationSchema,
            onSubmit: handleSubmit,
        }
    );

    console.log(formik);
     
    return(
       <> 
       <Box 
            component='form'
            id="useReducerAPi" 
            p={3} display={"grid"}  
            position={"absolute"} 
            boxShadow={shadows} 
            borderRadius={1}
            gap={2}
            width={700} 
            onSubmit={formik.handleSubmit}
        >
        <Box component={'h4'} gridColumn={'span 2'}> Formik Reducer</Box>
        <Box display={'flex'} flexDirection={'column'}>
        <label>Name:</label>
        <TextField
            name={ADD_USERNAME}
            value={formik.values.userName} 
            onChange={handleChange}
            onBlur={formik.handleBlur}
            size="small"
            error={formik.errors.userName || formik.touched.ADD_USERNAME && Boolean(formik.errors.userName)}
            helperText={formik.errors.userName || formik.touched.ADD_USERNAME && formik.errors.userName}
        /> 
        </Box>
        

       <Box display={'flex'} flexDirection={'column'}>
       <label>Password:</label>
        <TextField  
            name={ADD_USERPASSWORD}
            value={formik.values.userPassword}
            onChange={handleChange} 
            onBlur={formik.handleBlur}
            size="small"
            error={formik.errors.userPassword || formik.touched.ADD_USERPASSWORD && Boolean(formik.errors.userPassword)}
            helperText={formik.errors.userPassword || formik.touched.ADD_USERPASSWORD && formik.errors.userPassword}
        /> 
       </Box>

        <Box display={'flex'} flexDirection={'column'}>
        <label>Email:</label>
        <TextField  
            name={ADD_USEREMAIL}
            value={formik.values.userEmail}
            onChange={handleChange} 
            onBlur={formik.handleBlur}
            size="small"
            error={formik.errors.userEmail || formik.touched.ADD_USEREMAIL && Boolean(formik.errors.userEmail)}
            helperText={formik.errors.userEmail || formik.touched.ADD_USEREMAIL && formik.errors.userEmail}
        />
        </Box>

        <Box display={'flex'} flexDirection={'column'}>
        <label>Phone Number:</label>
        <TextField  
            name={ADD_USERNUMBER}
            value={formik.values.userNumber}
            onChange={handleChange} 
            onBlur={formik.handleBlur}
            size="small"
            error={formik.errors.userNumber || formik.touched.ADD_USERNUMBER && Boolean(formik.errors.userNumber)}
            helperText={formik.errors.userNumber || formik.touched.ADD_USERNUMBER && formik.errors.userNumber}
        /> 
        </Box>
        
        <Box  alignSelf={'end'} >
            <Button 
                variant="contained" 
                type="submit"
                
            > Submit </Button>  
        </Box>
       </Box>
       </>
    );
};