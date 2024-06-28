import { Box, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { getAlluserAdmin } from "../../Api/AuthN-AuthR/AdminGetApi";

export function AdminTable() {

   const token = localStorage.getItem('token'); 
   const [allData,setAllData] = useState([]);

   async function fetchUser(access){
         const response =  await getAlluserAdmin(access);
         setAllData(
            [
                ...response
            ]
         );
    };

    useEffect(
        () => {
            fetchUser(token);
        },[]
    );
    
    return(
        // <Box margin={22}  display={'flex'} justifyContent={'center'} >
        //     Loading.......
        // </Box>
        <Table 
        sx={
            {
                marginTop:20,
                width:1000,
                marginLeft:20,
            }
        }>
            <TableHead>
                <TableRow>
                    <TableCell align="center" className="bg-secondary text-white">Name</TableCell>
                    <TableCell align="center" className="bg-secondary text-white">Email</TableCell>
                    <TableCell align="center" className="bg-secondary text-white">Mobile No.</TableCell>
                    <TableCell align="center" className="bg-secondary text-white">Role</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    allData.map( (value) => {
                        return(
                            <TableRow key={value.userId}>
                                <TableCell align="center">{value.userName}</TableCell>
                                <TableCell align="center">{value.email}</TableCell>
                                <TableCell align="center">{value.mobileNo}</TableCell>
                                <TableCell align="center">{value.userRole}</TableCell>
                            </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    );
};