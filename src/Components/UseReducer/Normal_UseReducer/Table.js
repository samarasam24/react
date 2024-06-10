import { deleteUser, editUser } from "./Action/Action";

export function UseReducerNonAPiTable( {data,dispatch} ) {

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    }; 

    const handleEdit = (id) => {
        dispatch(editUser(id)); 
    };

    return(
        <div className="d-flex flex-column position-absolute" id="useRdrNonAPiTable">
        <table className="position-absolute table table-bordered ms-3" >
            <thead>
                <tr>
                    <th className="px-4 fs-4">Name</th>
                    <th className="px-4 fs-4">Password</th>
                    <th className="px-4 fs-4">Action</th>
                </tr>
            </thead>
            <tbody>
                 {
                    data.allUser.map( (value) => {
                        return(
                            <tr key={value.id} className="text-center">
                                <td>{value.userName}</td>
                                <td>{value.userPassword}</td>
                                <td className="d-flex gap-2">
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
        </div>
    );
};