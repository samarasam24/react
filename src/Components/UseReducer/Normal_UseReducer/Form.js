import { ADD_USERNAME, ADD_USERPASSWORD } from "./Type/Type";
import { addUser, addUserData,updateUser } from "./Action/Action";
import { useNavigate,useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export function UseReducerNonAPi({data,dispatch}){

   
    const navigate = useNavigate();
    const {id} = useParams(); 
    const [ editId , setEditId] = useState(null);

    const handleChange = (e) => {
        const {name,value} = e.target;
        dispatch(addUserData(name,value));
    };  
    useEffect( () => {
        if (id !== undefined) {
             setEditId( id.substring(1,2) );
        }
    },[])
    const handleSubmit = (e) => {
        e.preventDefault(); 
        
       if(editId !== null) {
        dispatch(
            updateUser(
                {
                    id:editId,
                    userName:data.userName,
                    userPassword:data.userPassword
                }
            )
        );
       }else {
        dispatch(
            addUser(
                {   
                    id:data.allUser.length,
                    userName:data.userName,
                    userPassword:data.userPassword
                }
            )
        );
       }
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