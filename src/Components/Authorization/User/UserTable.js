import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField,Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getUserMethod } from "../../Api/AuthN-AuthR/UserGetApi";
import { putApiMethod } from "../../Api/AuthN-AuthR/PutApi";
import { delUserApi } from "../../Api/AuthN-AuthR/delUserApi";
import { useNavigate } from "react-router-dom";

export const UserTableComponent = () => {

    
    const [user,setUser] = useState({
        password: "",
        confirmPassword: "",
    });
    const [edit,setEdit] = useState(
        {
            username:false,
            email:false,
            mobileNo:false,
            popup:false
        }
    );
    const navigate = useNavigate();
    const email = localStorage.getItem('email');
    const token = localStorage.getItem('token'); 

    async function fetchUser(payload,token){ 
        const response = await getUserMethod(payload,token);  
        const {Authorities,Details,} = response;  
        
        setUser(
            {
                ...Details, 
                role:Authorities[0].authority
            }
        );
       
    };

    const handleEdit = async (e) => { 
        e.preventDefault();

         const res = await putApiMethod(user,token);
         console.log('edit-table-res:',res);
         setEdit(
            {
                ...edit, 
                popup:!edit.popup
            }
        );
    };

    const handleChange = (e) => {
        const {name,value} = e.target;
        setUser(
            {
                ...user,
                [name]:value
            }
        );
        document.addEventListener('keydown', (e) => {
             if(e.key === 'Enter'){
               if( name === 'userName' ){ setEdit(
                    {
                        ...edit,
                        username:!edit.username,
                        email:!edit.email
                    }
                )} else if ( name === 'email'){
                     setEdit(
                    {
                        ...edit,
                        email:!edit.email,
                        mobileNo:!edit.mobileNo
                    }
                )} else if(name === 'mobileNo') {
                    setEdit(
                        {
                            ...edit, 
                            mobileNo:!edit.mobileNo,
                            popup:!edit.popup
                        }
                    );
                };
             }
            }
        );
    }; 

    const handleDelete = () => {
        delUserApi(user.email,token);
        navigate('/auth/login');
    };

    useEffect( () => {
        fetchUser(email,token);
    },[]);   
    console.log(user);
    return(
      <>
      { edit.popup ? 
        <Box margin={22} display={'flex'} justifyContent={'center'}>
         <form className="rounded gap-2 d-flex flex-column shadow p-5" onSubmit={handleEdit}>
         <Typography>Password:</Typography>
         <TextField
         size="small"
         name='password'
         value={user.password}
         onChange={handleChange}/>
         <Typography>Confirm Password:</Typography>
         <TextField
         size="small"
         name='confirmPassword'
         value={user.confirmPassword}
         onChange={handleChange}/>
         <Box display={"flex"} width={230} justifyContent={'end'}>
         <Button color="success" variant="contained" type='submit'>Update</Button>
         </Box>
         </form>
        </Box> :
          <Table 
          sx={
              {
                  margin:20,
                  width:1000
              }
          }>
              <TableHead>
                  <TableRow>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="center">Mobile No</TableCell>
                      <TableCell align="center">Role</TableCell>
                      <TableCell align="center">Action</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>    
                      <TableCell align="center">
                          { !edit.username ? <> {user.length !== 0 && user.userName} </> : 
                          <TextField 
                          size="small" 
                          name='userName'
                          value={user.userName}
                          onChange={handleChange}/>}
                      </TableCell>
                      <TableCell align="center">
                          { !edit.email ? <> {user.length !== 0 && user.email} </> : 
                          <TextField 
                          size="small" 
                          name="email"
                          value={user.email}
                          onChange={handleChange}/>}
                      </TableCell>
                      <TableCell align="center">
                          { !edit.mobileNo ? <> {user.length !== 0 && user.mobileNo} </> : 
                          <TextField 
                          size="small"
                          name="mobileNo"
                          value={user.mobileNo}
                          onChange={handleChange}/>}
                      </TableCell>
                      <TableCell align="center">{user.length !== 0 && user.role}</TableCell>
                      <TableCell align="center">
                          <Button 
                          onClick={ 
                              () => {
                                  setEdit(
                                      {
                                          ...edit,
                                          username:!edit.username
                                      }
                                  )
                              }
                          }>Edit</Button>
                          <Button onClick={handleDelete}>Delete</Button>
                      </TableCell>
                  </TableRow>
              </TableBody>
          </Table>
      }
      </>
    );
};