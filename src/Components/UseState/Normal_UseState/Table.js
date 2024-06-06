import { useNavigate } from "react-router-dom";

export function NonApiTable({allUserData,editData,deleteData}) {

    const navigate = useNavigate(); 
    return(
        <div className="container-fluid  col-7 d-flex flex-column mt-5 pt-5">
        <table className=" table table-bordered border-dark text-center">
          
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Password</th>   
                    <th>Action</th>
                </tr>
             </thead> 
             <tbody>
                {
                    allUserData.map( (value,index) =>{
                        return(
                            <tr key={index}>
                                <td>{value.userName}</td>
                                <td>{value.userPassword}</td>
                                <td>
                                    <button 
                                    className="btn-primary rounded"
                                    onClick={() =>{
                                        editData(index);
                                        navigate('/non-api-form');
                                        }}>Edit</button>
                                        {'  '}
                                    <button
                                    className="btn-danger rounded"
                                    onClick={() => 
                                        deleteData(index)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        <button
        className="btn-secondary rounded align-self-start"
        onClick={() => navigate('/non-api-form') }>Back</button>
        </div>
    );
};