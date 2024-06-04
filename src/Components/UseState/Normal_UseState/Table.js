import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function TableComponent({setEditId,allUserData}) {

    const navigate = useNavigate();
    const [formData,setFormData] = useState(allUserData);
    const handleDelete = (id) => {
        const updatedUser = [...allUserData];
        updatedUser.splice(id,1);
        setFormData(updatedUser);
        allUserData.splice(id,1);
    };
    const handleEdit = (id) => {
      setEditId(id)
      navigate('/');
    } 
    return(
        <table>
          
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Password</th>   
                    <th>Action</th>
                </tr>
             </thead> 
             <tbody>
                {
                    formData.map( (value,index) =>{
                        return(
                            <tr key={index}>
                                <td>{value.userName}</td>
                                <td>{value.userPassword}</td>
                                <td>
                                    <button onClick={() => handleEdit(index)}>Edit</button>
                                    <button onClick={() => handleDelete(index)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};