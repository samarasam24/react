import {  useEffect, useState } from "react";
import {  apiGetByIdMethod, apiPostMethod, apiPutMethod } from "../../Api/MockApi";
import {  useNavigate, useParams } from "react-router-dom"; 

export function FormApi() { 
    const navigate = useNavigate(); 
    const editerId = useParams(); 

    const [ userObj,setUserObj ] = useState({
            userName:'',
            userPassword:'',
            confirmPassword:'',
            userEmail:'',
            phoneNumber:'',
            userAge:'',
            userAddress:''
    }); 
    const [ error,setError ] = useState({
        userName:'',
        userPassword:'',
        confirmPassword:'',
        userEmail:'',
        phoneNumber:'',
        userAge:'',
        userAddress:''
    }); 
    const handleSubmit = async (e) => {
        e.preventDefault();
       if(editerId.id){
           apiPutMethod(editerId.id,userObj);
       }else{
            if(userObj.userName===''&&userObj.userEmail === ''&&userObj.userPassword===''&&userObj.userAge===''&&userObj.userAddress===''&&userObj.phoneNumber===''&&userObj.confirmPassword===''){
                setError(
                    {
                        userName:'Name is Required*',
                        userPassword:'Password is Required*',
                        confirmPassword:'ConfirmPassword is Required*',
                        userEmail:'Email is Required*',
                        phoneNumber:'Phone Number is Required*',
                        userAge:'Age is Required*',
                        userAddress:'Address is Required*' 
                    }
                );
                return false;
            }
           apiPostMethod(userObj) ;
       }
        setUserObj(
            {
                userName:'',
                userPassword:'',
                confirmPassword:'',
                userEmail:'',
                phoneNumber:'',
                userAge:'',
                userAddress:''
            }
        );
        navigate('/table');
    };

    const editById = async (id) => {

        const newData = await apiGetByIdMethod(id);  
         setUserObj(
            {
                ...userObj,
                userName: newData.userName,
                userPassword:newData.userPassword,
                confirmPassword:newData.confirmPassword,
                userEmail:newData.userEmail,
                phoneNumber:newData.phoneNumber,
                userAge:newData.userAge,
                userAddress:newData.userAddress
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

   
    

    
    

    return(
        <>
        <form
        id="apiUseState"
        className="position-absolute container-fluid col-6 mx-auto shadow rounded row py-5 bg-white gap-2 justify-content-center"
        onSubmit={handleSubmit} 
        style={{zIndex:-1}}>
           
           <div className="d-flex flex-column col-9">
             <h1>UseState-Api</h1>
           </div>

           <div className="d-flex flex-column col-4">
                <label>Name:</label>        {/*name-field*/}
                <input
                className="border border-none rounded shadow-sm"
                name="userName"
                value={userObj.userName}
                onChange={handleChange} />  
                <span className="text-danger">{error.userName}</span>
           </div>
           

           <div className="d-flex flex-column col-5">
                <label>Password:</label>    {/*password-field*/}
                <input
                name="userPassword"
                 className="border border-none rounded shadow-sm"
                value={userObj.userPassword}
                onChange={handleChange} />  
                 <span className="text-danger">{error.userPassword}</span> 
           </div> 

           <div className="d-flex flex-column col-4">
             <label>Confirm Password:</label>
             <input
             name="confirmPassword"
             className="border border-none rounded shadow-sm"
             value={userObj.confirmPassword}
             onChange={ handleChange} />
              <span className="text-danger">{error.confirmPassword}</span>  
           </div>

           <div className="d-flex flex-column col-5">
           <label>Email:</label>
            <input
            name="userEmail"
            className="border border-none rounded shadow-sm"
            value={userObj.userEmail}
            onChange={ handleChange} />  
             <span className="text-danger">{error.userEmail}</span>
           </div>

           <div className="d-flex flex-column col-4">
           <label>Phone Number:</label>
            <input
            className="border border-none rounded shadow-sm"
            name="phoneNumber"
            value={userObj.phoneNumber}
            onChange={ handleChange} /> 
             <span className="text-danger">{error.phoneNumber}</span> 
           </div>

           <div className="d-flex flex-column col-5">
           <label>Age:</label>
            <input
            name="userAge"
             className="border border-none rounded shadow-sm"
            value={userObj.userAge}
            onChange={ handleChange} />  
             <span className="text-danger">{error.userAge}</span>
           </div>

           <div className="d-flex flex-column col-9 px-2 ">
           <label>Address:</label>
            <textarea 
            name="userAddress"
            className="border border-none rounded shadow-sm"
            value={userObj.userAddress}
            onChange={ handleChange} />  
             <span className="text-danger">{error.userAddress}</span>
           </div>
                        
            <div className="col-9 d-flex flex-column">
            <button 
            className="align-self-end rounded  btn-primary shadow">Submit</button>
            </div>
        </form>
        </>
    );
};

