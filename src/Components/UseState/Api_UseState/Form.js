import {  useEffect, useState } from "react";
import {  apiGetByIdMethod, apiPostMethod, apiPutMethod } from "../../Api/MockApi";
import {  useNavigate, useParams } from "react-router-dom";
import * as Yup from 'yup';
import { useFormik } from "formik";

export function FormApi() { 
    const navigate = useNavigate(); 
    const editerId = useParams(); 

    const initialValues = {
            userName:'',
            userPassword:'',
            confirmPassword:'',
            userEmail:'',
            phoneNumber:'',
            userAge:'',
            userAddress:''
    };
    const validationSchema = Yup.object(
        {
            userName: Yup.string().required('Name is Required'),
            userPassword:Yup.string().required('Password is Required'),
            confirmPassword:Yup.string().oneOf([Yup.ref('userPassword'),null],'Password Must Be Same').required('Password is Required'),
            userEmail:Yup.string().email('Invalid email format').required('Email is Required'),
            phoneNumber: Yup.number().required('Phone Number is Required').positive().integer(),
            userAge:Yup.number().required('Age is Required').positive().integer(),
            userAddress: Yup.string().required('Address is Required')
        }
    );
    const onSubmit = async (value,{resetForm}) => { 
        if(editerId.id){
            apiPutMethod(editerId.id,value);
        }else{
            apiPostMethod(value);
        } 
         resetForm();
         navigate('/table');
     };
    const formik =useFormik({
        initialValues,
        validationSchema,
        onSubmit
    }); 

    const editById = async (id) => {
       
        const newData = await apiGetByIdMethod(id);  
        formik.setValues(newData)
    };
    useEffect( () => {
        
        if (editerId.id) {
            editById(editerId.id);
        }
    },[]);

    

    
    

    return(
        <>
        <form
        className=" container-fluid col-7 mx-auto border border-dark rounded row py-5  gap-2 justify-content-center"
        onSubmit={formik.handleSubmit}>
           
           <div className="d-flex flex-column col-9">
             <h1>UseState-Api</h1>
           </div>

           <div className="d-flex flex-column col-4">
                <label>Name:</label>        {/*name-field*/}
                <input
                name="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}/> 
                {formik.touched.userName && (<span className="text-danger">{formik.errors.userName}</span>)}
           </div>
           

           <div className="d-flex flex-column col-5">
                <label>Password:</label>    {/*password-field*/}
                <input
                name="userPassword"
                value={formik.values.userPassword}
                onChange={formik.handleChange}/> 
                {formik.touched.userPassword && (<span className="text-danger">{formik.errors.userPassword}</span>)}
           </div> 

           <div className="d-flex flex-column col-4">
             <label>Confirm Password:</label>
             <input
             name="confirmPassword"
             value={formik.values.confirmPassword}
             onChange={formik.handleChange}/> 
             {formik.touched.confirmPassword  && (<span className="text-danger">{formik.errors.confirmPassword}</span>)}
           </div>

           <div className="d-flex flex-column col-5">
           <label>Email:</label>
            <input
            name="userEmail"
            value={formik.values.userEmail}
            onChange={formik.handleChange}/> 
           {formik.touched.userEmail && ( <span className="text-danger">{formik.errors.userEmail}</span>)}
           </div>

           <div className="d-flex flex-column col-4">
           <label>Phone Number:</label>
            <input
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}/> 
            {formik.touched.phoneNumber && (<span className="text-danger">{formik.errors.phoneNumber}</span>)}
           </div>

           <div className="d-flex flex-column col-5">
           <label>Age:</label>
            <input
            name="userAge"
            value={formik.values.userAge}
            onChange={formik.handleChange}/> 
            {formik.touched.userAge&&(<span  className="text-danger">{formik.errors.userAge}</span>)}
           </div>

           <div className="d-flex flex-column col-9 px-2 ">
           <label>Address:</label>
            <textarea 
            name="userAddress"
            value={formik.values.userAddress}
            onChange={formik.handleChange}/> 
            {formik.touched.userAddress&&(<span className="text-danger">{formik.errors.userAddress}</span>)}
           </div>
                        
            <div className="col-9 d-flex flex-column">
            <button 
            className="align-self-end rounded  btn-primary">Submit</button>
            </div>
        </form>
        </>
    );
};