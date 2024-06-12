import  TextField  from "@mui/material/TextField";
import  Box  from "@mui/material/Box";
import  shadows from "@mui/material/styles/shadows";
import  Button  from "@mui/material/Button";
import { useState } from "react";

 
 export function UseReducerAPi(){

    const [ user,setUser ] = useState(
        {
            userName:'',
            userPassword:''
        }
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
         >
        <Box component={'h4'}> UseReducer With-Api</Box>
        <label>Name:</label>
        <TextField size="small"/> 
        <label>Password:</label>
        <TextField size="small"/> 
        <Box  alignSelf={'end'} ><Button variant="contained" type="submit">Submit</Button></Box>
       </Box>
       </>
    );
};