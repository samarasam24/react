import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell'; 
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';    
import { useEffect, useReducer } from 'react';  
import { Reducer, userDetails } from './Reducer/Reducer';
import { getData } from './Action/Action';
export function UseReducerAPiTable() {
      
    const [ user,dispatch ] = useReducer( Reducer,userDetails); 
   
    useEffect(
        () => { dispatch(  getData() )},[]
    );
    // console.log("user:",user);
     
    return(
       
        <Table 
        sx={
            {
                marginTop:15,
                marginLeft:20,
            }
        } 
        className='w-75'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Name</TableCell> 
              <TableCell align='center'>Password</TableCell> 
              <TableCell align='center'>Action</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
     
    );
};