import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import { FormApi } from './Components/UseState/Api_UseState/Form.js';
import { TableApi} from './Components/UseState/Api_UseState/Table.js';
import { NonApiForm } from './Components/UseState/Normal_UseState/Form.js';
import { NonApiTable } from './Components/UseState/Normal_UseState/Table.js';
import './App.css'
import { Navbar } from './Components/Navbar/Navbar.js';
import { useReducer, useState } from 'react';
import { UseReducerAPi } from './Components/UseReducer/Api_UseReducer/Form.js';
import { UseReducerNonAPi } from './Components/UseReducer/Normal_UseReducer/Form.js'; 
import { UseReducerNonAPiTable } from './Components/UseReducer/Normal_UseReducer/Table.js';
import { Reducer, initialValue } from './Components/UseReducer/Normal_UseReducer/Reducer/Reducer.js';
import { UseReducerAPiTable } from './Components/UseReducer/Api_UseReducer/Table.js';
import { FormikReducerAPi } from './Components/UseFormik/ReducerFormik/Form.js';
import { FormikReducerTable } from './Components/UseFormik/ReducerFormik/Table.js';
import { FormikForm } from './Components/UseFormik/NormalFormik/Form.js';
import { FormikTable } from './Components/UseFormik/NormalFormik/Table.js'; 
import { ContextForm } from './Components/UseContext/Form.js';
import { ContextTable } from './Components/UseContext/Table.js'; 
import { RegisterComponenet } from './Components/Authentication/Register/Register.js';
import {LoginFormComponent} from './Components/Authentication/Login/Login.js';
import { LoginSuccess } from './Components/Authentication/Login/LoginSuccess.js';
import { UserTableComponent } from './Components/Authorization/User/UserTable.js';
function App() {

  //Normal-UseState
  const [allUserData,setAllUserData] = useState([]);
  const [editId,setEditId] = useState(null); 

  const addOrEdit = (data) => {
    if(editId !== null){
      const updateData = allUserData.map(
        (value,index) => (index === editId ? data : value )
      ) 
      console.log(updateData);
      setAllUserData(
        updateData
      );
      setEditId(null);
    }else{
        setAllUserData(
          [
            ...allUserData,
            data
          ]
        );
    }
  };

  const editData = (data) => { 
    setEditId(data);
  };

  const deleteData = (index) =>  {
    setAllUserData(
      allUserData.filter((_,id) => id !== index)
    );
  };

  //Normal UseReducer
  const [ data,dispatch ] = useReducer(Reducer,initialValue); 
  
  return (   
    
    <BrowserRouter>
       <Navbar/>
      <Routes>
            <Route path="/" element={<Navigate to={'/form'}/>}/>
            <Route path='/form' element={<FormApi/>}/>
            <Route path="/table" element={<TableApi/>}/>
            <Route path="/form/:id" element={<FormApi/>}/>
            <Route 
            path='/non-api-form' 
            element={<NonApiForm 
              addOrEdit={addOrEdit} 
              editId={editId} 
              allUserData={allUserData}/>}/>
            <Route 
            path='/non-api-table-content' 
            element={ <NonApiTable
              allUserData={allUserData} 
              editData={editData} 
              deleteData={deleteData} /> }/>
            <Route path='/usereducer/non-api-form' element={<UseReducerNonAPi data={data} dispatch={dispatch}/>}/> 
            <Route path='/usereducer/non-api-form/:id' element={<UseReducerNonAPi data={data} dispatch={dispatch}/>}/> 
            <Route path='/usereducer/non-api-form/table' element={<UseReducerNonAPiTable data={data} dispatch={dispatch}/>}/>
            <Route path='/usereducer/api-form' element={<UseReducerAPi/>}/>
            <Route path='/usereducer/api-form/:id' element={<UseReducerAPi/>}/>
            <Route path='/usereducer/api-form/table' element={<UseReducerAPiTable/>}/>
            <Route path='/useformik/reducer-form' element={<FormikReducerAPi/>}/>
            <Route path='/useformik/reducer-form/:id' element={<FormikReducerAPi/>}/>
            <Route path='/useformik/reducer-form/table' element={<FormikReducerTable/>}/>
            <Route path='/useformik/form' element={<FormikForm/>}/>
            <Route path='/useformik/form/:id' element={<FormikForm/>}/>
            <Route path='/useformik/form/table' element={<FormikTable/>}/>
            <Route path='/context/form' element={<ContextForm/>}/>
            <Route path='/context/table' element={<ContextTable/>}/>
            <Route path='/auth/register' element={<RegisterComponenet/>}/>  
            <Route path='/auth/login' element={<LoginFormComponent/>}/>
            <Route path='/auth/login-success' element={<LoginSuccess/>}/>
            <Route path='/auth/user/data' element={<UserTableComponent/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
