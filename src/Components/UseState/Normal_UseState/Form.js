import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
export function FormComponent( { setEditId,editId,allUserData,setAllUserData } ) {
    
    const navigate = useNavigate(); 
    const [ userData,SetUserData ] = useState(
        {
            userName:'',
            userPassword:''
        }
    ); 
    const handleChange = (e) => {

        const { name,value } = e.target;
        
       if(editId === null) {
        SetUserData(
            {
                ...userData,
                [name]:value
            }
        );
       }else{
        
       }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
       
         
        
      if(editId === null){
        setAllUserData([
            ...allUserData,
            userData]);
      }else{
        setAllUserData( [
            ...allUserData,
            allUserData[editId].userName=userData.userName,
            allUserData[editId].userPassword=userData.userPassword
        ] )
      }
         
        navigate('/table-content');
    };
 
    return( 
        <div>
            <form onSubmit={handleSubmit}>
            <h1>UseState</h1>
            <label>Name:</label>
            <input
            onChange={ handleChange }
            name="userName"
            value={ 
                editId === null ? userData.userName : allUserData[editId].userName 
                }/>

            <label>Password:</label>
            <input
            onChange={ handleChange }
            name="userPassword"
            value={ 
                editId === null ? userData.userPassword : allUserData[editId].userPassword 
                }/>

            <button>Submit</button>
        </form>
         
        </div>
    );
};