import  TextField  from "@mui/material/TextField";
import  Box  from "@mui/material/Box";
import  shadows from "@mui/material/styles/shadows";
import  Button  from "@mui/material/Button";  
import { addUser, addUserDetail, editUser } from "./Action/Action";
import { useEffect, useReducer } from "react";
import { Reducer, userDetails } from "./Reducer/Reducer";
import { useNavigate, useParams } from "react-router-dom";
import { apiGetByIdMethod } from "../../Api/MockApi";
import { ADD_USERNAME, ADD_USERPASSWORD } from "./Type/Type";

 
 export function FormikReducerAPi(){ 

    const {id} = useParams();
    const navigate = useNavigate();
    const [user,dispatch] = useReducer( Reducer,userDetails );
    
    const handleChange = (e) => {
        const {name,value} = e.target;
        dispatch(addUserDetail(name,value));
    }; 
    const handleSubmit = (e) => {
        e.preventDefault();
       if( id !== undefined){
        dispatch(
            editUser(
                id,
                {
                    userName:user.userName,
                    userPassword:user.userPassword
                }
            )
        );
       }else{
        dispatch(
            addUser(
                {
                    userName:user.userName,
                    userPassword:user.userPassword
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
    };

    

    useEffect(
        () => {
            if( id  !== undefined )  fetchData() ;
        },[]
    );
    
    return(
       <> 
       <Box 
            component='form'
            id="useReducerAPi" 
            p={3} display={"flex"} 
            flexDirection={"column"} 
            position={"absolute"}
            boxShadow={shadows}
            borderRadius={1}
            gap={2}
            width={400} 
            onSubmit={handleSubmit}
        >
        <Box component={'h4'}> Formik Reducer</Box>
        <label>Name:</label>
        <TextField
            name={ADD_USERNAME}
            value={user.userName} 
            onChange={handleChange}
            size="small"
        /> 

        <label>Password:</label>
        <TextField
            name={ADD_USERPASSWORD}
            value={user.userPassword}
            onChange={handleChange} 
            size="small"
        /> 
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