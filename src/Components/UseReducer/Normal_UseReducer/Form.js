import { ADD_USERNAME, ADD_USERPASSWORD } from "./Type/Type";
import { addUser, addUserData } from "./Action/Action";
import { useNavigate } from "react-router-dom";

export function UseReducerNonAPi({data,dispatch}){

   
    const navigate = useNavigate();

    const handleChange = (e) => {
        const {name,value} = e.target;
        dispatch(addUserData(name,value));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        dispatch(
            addUser(
                {   
                    id:data.allUser.length,
                    userName:data.userName,
                    userPassword:data.userPassword
                }
            )
        );
        navigate('/usereducer/non-api-form/table');
    };

    return(
        <>
        <form 
        onSubmit={handleSubmit}
        className="position-absolute shadow p-3 ps-4 d-flex flex-column  col-4 gap-2 rounded" id="useReducerNonAPi">
            <h1>Without-APi</h1>
            <label>Name:</label>
            <input 
            name={ADD_USERNAME}
            value={data.userName}
            onChange={handleChange}
            className="border border-none shadow-sm rounded col-11"/>
            <label className="mt-3">Password:</label>
            <input 
            name={ADD_USERPASSWORD}
            value={data.userPassword}
            onChange={handleChange}
            className="border border-none shadow-sm rounded col-11 "/>
            <div className="col-11 d-flex flex-column">
            <button
            type="submit" 
            className="rounded btn btn-primary align-self-end mt-3">Submit</button>
            </div>
        </form>
        </>
    );
};