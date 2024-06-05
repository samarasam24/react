import {  useEffect, useState } from "react";
import {  apiGetByIdMethod, apiPostMethod, apiPutMethod } from "../../Api/MockApi";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export function Form() { 
    const navigate = useNavigate();
    const location = useLocation(); 
    const editerId = useParams(); 
    
    const [ userObj,setUserObj ] = useState(
        {
            userName:'',
            userPassword:''
        }
    );
    const editById = async (id) => {
       
        const newData = await apiGetByIdMethod(id);  
         setUserObj(
            {
                ...userObj,
                userName: newData.userName,
                userPassword:newData.userPassword,
            }
         )
       
    };
    useEffect( () => {
        
        if (editerId.id) {
            editById(editerId.id);
        }
    },[]);

    const handleChange = (e) => {
        const {name,value} = e.target
        setUserObj(
            {
                ...userObj,
               [name]:value
            }
        );
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
       if(editerId.id){
           apiPutMethod(editerId.id,userObj);
       }else{
           apiPostMethod(userObj) ;
       }
        setUserObj(
            {
                userName:'',
                userPassword:''
            }
        );
        navigate('/table');
    };

    return(
        <>
        <form
        className="border border-dark rounded d-flex flex-column justify-content-center gap-2 p-5"
        onSubmit={handleSubmit}>
            <h1>UseState-Api</h1>

            <label>Name:</label>        {/*name-field*/}
            <input
            name="userName"
            value={userObj.userName}
            onChange={handleChange}/>

            <label>Password:</label>    {/*password-field*/}
            <input
            name="userPassword"
            value={userObj.userPassword}
            onChange={handleChange}/>

            <button 
            className="align-self-center rounded  btn-primary">Submit</button>
        </form>
        </>
    );
};