import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import { FormApi } from './Components/UseState/Api_UseState/Form.js';
import { TableApi} from './Components/UseState/Api_UseState/Table.js';
import { NonApiForm } from './Components/UseState/Normal_UseState/Form.js';
import { NonApiTable } from './Components/UseState/Normal_UseState/Table.js';
import './App.css'
import { Navbar } from './Components/Navbar/Navbar.js';
import { useState } from 'react';
function App() {

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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
