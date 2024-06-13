import  TextField  from "@mui/material/TextField";
import  Box  from "@mui/material/Box";
import  shadows from "@mui/material/styles/shadows";
import  Button  from "@mui/material/Button"; 
import { ADD_USERNAME, ADD_USERPASSWORD } from "./Type/Type"; 
import { addUser, addUserDetail } from "./Action/Action";
import { useReducer } from "react";
import { Reducer, userDetails } from "./Reducer/Reducer";

 
 export function UseReducerAPi(){ 

    const [user,dispatch] = useReducer( Reducer,userDetails );
    
    const handleChange = (e) => {
        const {name,value} = e.target;
        dispatch(addUserDetail(name,value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            addUser(
                {
                    userName:user.userName,
                    userPassword:user.userPassword
                }
            )
        );
    };
    
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
        <Box component={'h4'}> UseReducer With-Api</Box>
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