import { useNavigate } from "react-router-dom";
import { deleteUser, editUser } from "./Action/Action";  

export function UseReducerNonAPiTable( {data,dispatch} ) {
    
    const navigate = useNavigate();

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    }; 

    const handleEdit = (id) => {
        dispatch(editUser(id)); 
        navigate(`/usereducer/non-api-form/:${id}`);
    };

    return(
       
        <div className="container-fluid col-7 d-flex flex-column mt-5 pt-5">
        <table className=" text-center table table-bordered ms-3" >
            <thead>
                <tr>
                    <th className="px-4 fs-4">Name</th>
                    <th className="px-4 fs-4">Password</th>
                    <th className="px-4 fs-4">Action</th>
                </tr>
            </thead>
            <tbody >
                 {
                    data.allUser.map( (value) => {
                        return(
                            <tr key={value.id} className="text-center">
                                <td>{value.userName}</td>
                                <td>{value.userPassword}</td>
                                <td className="d-flex gap-2 justify-content-center">
                                    <button 
                                    className="btn btn-success"
                                    onClick={() => handleEdit(value.id)}>Edit</button>
                                    <button 
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(value.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                 }
            </tbody>
        </table> 
        <button className="btn btn-secondary px-4 py-1  align-self-start ms-3" onClick={ () => navigate('/usereducer/non-api-form')}>Back</button>
        </div>
    );
};