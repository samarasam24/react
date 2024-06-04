import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';   
import { FormComponent } from './Components/UseState/Normal_UseState/Form.js';
import { TableComponent } from './Components/UseState/Normal_UseState/Table.js';
import { useState } from 'react';

function App() {
  const [allUserData,setAllUserData] = useState([]);
  const [editID,setEditId] = useState(null);
  const editUserFunc = (newUser) => {
    setAllUserData(
      [
        ...allUserData,
        newUser
      ]
    );
  };
  return ( 
     <BrowserRouter>
     <Routes>
      <Route 
      path='/' 
      element={
      <FormComponent 
      setEditID={setEditId}
      editId={editID}
      setAllUserData={setAllUserData} 
      allUserData={allUserData}/>
      }/>
      <Route 
      path='/table-content' 
      element={
      <TableComponent 
      setEditId={setEditId} 
      editUserFunc={editUserFunc}
      allUserData={allUserData}/>
      }/>
     </Routes>
     </BrowserRouter>
  );
};

export default App;
