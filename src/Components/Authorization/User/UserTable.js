import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { getUserMethod } from "../../Api/AuthN-AuthR/UserGetApi";

export const UserTableComponent = () => {

    
    const [user,setUser] = useState({});
    const [edit,setEdit] = useState(
        {
            username:false,
            email:false,
            mobileNo:false
        }
    );

    async function fetchUser(payload,token){ 
        const response = await getUserMethod(payload,token);
        const {Authorities,Details} = response;  
        
        setUser(
            {
                ...Details, 
                role:Authorities[0].authority
            }
        );
       
    };

    const handleEdit = () => { 
    };

    const handleChange = (e) => {
        const {name,value} = e.target;
        setUser(
            {
                ...user,
                [name]:value
            }
        );
    };

    useEffect( () => {
        const userName = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        fetchUser(userName,token);
    },[]);  
    console.log(user);
    return(
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
                        <TextField size="small" value={user.mobileNo}></TextField>}
                    </TableCell>
                    <TableCell align="center">{user.length !== 0 && user.role}</TableCell>
                    <TableCell align="center">
                        <Button 
                        onClick={ 
                            () => {
                                handleEdit();
                                setEdit(
                                    {
                                        ...edit,
                                        username:true
                                    }
                                )
                            }
                        }>Edit</Button>
                        <Button>Delete</Button>
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};