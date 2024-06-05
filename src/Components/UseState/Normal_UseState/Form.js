import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
export function FormComponent( { editId,addOrEdit,allUserData } ) {
    
    const navigate = useNavigate(); 
    const [ userData,SetUserData ] = useState(
        {
            userName:'',
            userPassword:''
        }
    ); 

    useEffect(() => {

    if(editId !== null) {  
       SetUserData({
        ...allUserData,
        userName:allUserData[editId].userName,
        userPassword:allUserData[editId].userPassword,
       });
    }
    },[editId,allUserData])

    const handleChange = (e) => {

        const { name,value } = e.target;
        SetUserData(
            {
                ...userData,
                [name]:value
            }
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
      addOrEdit(userData);
      SetUserData(
        {
            userName:'',
            userPassword:''
        }
      ); 
      navigate('/table-content');
    };
 
    return( 
        <>
            <form
            className="d-flex justify-content-center flex-column border border-dark p-5 py-4 gap-2 rounded"
            onSubmit={handleSubmit}>
            <h1>UseState Non-Api</h1>
            <label>Name:</label>
            <input
            onChange={ handleChange }
            name="userName"
            value={userData.userName}/>

            <label>Password:</label>
            <input
            onChange={ handleChange }
            name="userPassword"
            value={userData.userPassword}/>

            <button className="align-self-center rounded btn-primary">Submit</button>
        </form>
         
        </>
    );
};