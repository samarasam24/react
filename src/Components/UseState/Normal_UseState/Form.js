import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
export function NonApiForm( { editId,addOrEdit,allUserData } ) {
    
    const navigate = useNavigate(); 
    const [ userData,SetUserData ] = useState(
        {
            userName:'',
            userPassword:''
        }
    ); 
    const [error,setError] = useState({
        userName:'',
        userPassword:''
    });
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

      if(userData.userName === '' && userData.userPassword === ''){
        setError(
            {
                ...error,
                userName:'Name is Required*',
                userPassword:'Password is Required*'
            }
        ); 
        return false;
      };
        
      addOrEdit(userData);
      SetUserData(
        {
            userName:'',
            userPassword:''
        }
      ); 
      navigate('/non-api-table-content');
    };
 
    return( 
        <div className="position-absolute w-100" id="withoutApiForm" style={{zIndex:-1}}>
            <form
            className=" container-fluid col-4 mt-5 mx-auto d-flex flex-column shadow p-5 py-4 gap-2 rounded"
            onSubmit={handleSubmit}
            >
            <h1>UseState Non-Api</h1>
            <label>Name:</label>
            <input
            className="border border-none rounded shadow-sm"
            onChange={ handleChange }
            name="userName"
            value={userData.userName}/>
            {<span className="text-danger">{error.userName}</span>}

            <label>Password:</label>
            <input
            className="border border-none rounded shadow-sm"
            onChange={ handleChange }
            name="userPassword"
            value={userData.userPassword}/>
            {<span className="text-danger">{error.userPassword}</span>}

            <button className="align-self-end  mt-2 rounded btn-primary">Submit</button>
        </form>
         
        </div>
    );
};