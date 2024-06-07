import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiDeleteMethod, apiGetMethod } from "../../Api/MockApi";

export function TableApi() {
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

    async function handleDelete(id)  {
       const statusCode = await apiDeleteMethod(id); 
        setAllUser(
            {
                ...allUser,
                ready:false
            }
        );
        if (statusCode === 200) fetchData();
    };

    const handleEdit = (id) => {
      navigate(`/form/${id}`);
    };
    
    return(
        <>
        {
         !allUser.ready ? <div id="loaderApi" className="position-absolute">Loading.....</div>:
         <div
         id="apiTable"
          className="d-flex flex-column position-absolute">
         <table className=" table table-bordered">
            <thead>
                <tr>
                    <th className="text-center p-3">Name</th>
                    <th className="text-center p-3">Password</th>
                    <th className="text-center p-3">ConfirmPassword</th>
                    <th className="text-center p-3">Email</th>
                    <th className="text-center p-3">Ph.No</th>
                    <th className="text-center p-3">Age</th>
                    <th className="text-center p-3">Address</th>
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
                            <td className="text-center p-3">{value.confirmPassword}</td>
                            <td className="text-center p-3">{value.userEmail}</td>
                            <td className="text-center p-3">{value.phoneNumber}</td>
                            <td className="text-center p-3">{value.userAge}</td>
                            <td className="text-center p-3">{value.userAddress}</td>
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