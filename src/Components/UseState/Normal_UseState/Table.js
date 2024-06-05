import { useNavigate } from "react-router-dom";

export function TableComponent({allUserData,editData,deleteData}) {

    const navigate = useNavigate(); 
    return(
        <>
        <table className="table table-bordered border-dark text-center">
          
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
                                        navigate('/');
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
        className="btn-secondary rounded"
        onClick={() => navigate('/') }>Back</button>
        </>
    );
};