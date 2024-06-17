import  Button  from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell'; 
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';  
import { apiDeleteMethod, apiGetMethod } from '../../Api/MockApi';
import { useEffect,useReducer } from 'react';
import { Reducer, userDetails } from './Reducer/Reducer';
import { deletRequest, deleteSuccess, getData } from './Action/Action';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export function FormikReducerTable() {

  const navigate = useNavigate();
  const [ userDatas, dispatch ] = useReducer(Reducer,userDetails );

  const fetchData = async () => {
    const response = await apiGetMethod();
    dispatch( getData(response) );
  };  

  const handleDelete = async (id) => {
    dispatch(deletRequest());
    const status = await apiDeleteMethod(id);
    if(status) { 
      dispatch(deleteSuccess()); 
      fetchData(); 
    };

  };

  const handleEdit = (id) => {
    navigate(`/useformik/reducer-form/${id}`);
  };
  
  useEffect( () => {
    fetchData();
  },[ ]); 
       
     
    return(
     <>
     {
      userDatas.lazzyLoader ? <Box display={'flex'} justifyContent={'center'} alignItems={'center'} minHeight={600}> Loading....</Box> :
      <>
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
              <TableCell align='center'>Email</TableCell> 
              <TableCell align='center'>Number</TableCell> 
              <TableCell align='center'>Action</TableCell> 
            </TableRow>
          </TableHead>
          <TableBody>
             {
              userDatas.apiData.map( (value) => 
              {
                return(
                  <TableRow key={value.id}>
                    <TableCell align='center'>{value.userName}</TableCell>
                    <TableCell align='center'>{value.userPassword}</TableCell>
                    <TableCell align='center'>{value.userEmail}</TableCell>
                    <TableCell align='center'>{value.userNumber}</TableCell>
                    <TableCell align='center'>
                      <Button 
                        type='button'
                        onClick={ () => handleEdit(value.id)}
                        color='success' 
                        variant='outlined'> Edit </Button> 
                      {' '} 
                      <Button
                        type='button'
                        onClick={ () => handleDelete(value.id)} 
                        color='error' 
                        variant='contained'> Delete </Button>
                    </TableCell>
                  </TableRow>
                )
              })
             }
          </TableBody>
        </Table>
        <Box marginLeft={20} marginTop={5}><Button variant='outlined' type='button' onClick={() => navigate('/useformik/reducer-form')}>Back</Button></Box>
        </>
     }
     </>    
    );
};