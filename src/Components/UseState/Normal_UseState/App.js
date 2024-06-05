import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import { FormComponent } from './Form.js';
import { TableComponent } from './Table.js';
import { useState } from 'react';

export function UseStateNormalApp() {
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
  return ( 
     <BrowserRouter>
     <Routes>
      <Route 
      path='/' 
      element={
      <FormComponent 
      addOrEdit={addOrEdit} 
      editId={editId}
      allUserData={allUserData}/>
      }/>
      <Route 
      path='/table-content' 
      element={
      <TableComponent 
      allUserData={allUserData}
      editData={editData}
      deleteData={deleteData} />
      }/>
     </Routes>
     </BrowserRouter>
  );
}; 
