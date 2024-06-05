import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiDeleteMethod, apiGetMethod } from "../../Api/MockApi";

export function Table() {
    const navigate = useNavigate();
    const [allUser,setAllUser] = useState({
        ready:false
    }); 
    const fetchData = async () => {
        const newData = await apiGetMethod();
         
        setAllUser({
            ...allUser, 
            ready:true,
            newData
        }); 
    };
    useEffect(
    () => { 
        fetchData(); 
    },[]);  

    function handleDelete(id)  {
        apiDeleteMethod(id); 
        setAllUser(
            {
                ...allUser,
                ready:false
            }
        );
        setTimeout( () => {
            fetchData()
        },300) 
    };

    const handleEdit = (id) => {
      navigate(`/form/${id}`);
    };
    
    return(
        <>
        {
         !allUser.ready? 'Loading.....':
         <div className="d-flex flex-column">
         <table className=" table table-bordered">
            <thead>
                <tr>
                    <th className="text-center p-3">Name</th>
                    <th className="text-center p-3">Password</th>
                    <th className="text-center p-3">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                 allUser.newData.map((value) => {
                    return(
                        <tr key={value.id}>
                            <td className="text-center p-3">{value.userName}</td>
                            <td className="text-center p-3">{value.userPassword}</td>
                            <td className="text-center p-3">
                                <button 
                                className="btn btn-primary"
                                onClick={ () => handleEdit(value.id)}>Edit</button>
                                {'   '} 
                                <button
                                className="btn btn-danger" 
                                onClick={ () => handleDelete(value.id)}>Delete</button>
                            </td>
                        </tr>
                    );
                   })
                }
            </tbody>
           </table>
            <button 
            className="btn btn-secondary align-self-end "
            onClick={()=>navigate('/')}>Back</button>
        </div>
        }
       
        </>
    );
};