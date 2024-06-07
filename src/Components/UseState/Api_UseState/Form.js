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
            userAddress:Yup.string().required('Address is Required')
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
        id="apiUseState"
        className=" position-absolute container-fluid col-7 mx-auto shadow rounded row py-5  gap-2 justify-content-center"
        onSubmit={formik.handleSubmit}>
           
           <div className="d-flex flex-column col-9">
             <h1>UseState-Api</h1>
           </div>

           <div className="d-flex flex-column col-4">
                <label>Name:</label>        {/*name-field*/}
                <input
                className="border border-none rounded shadow-sm"
                name="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/> 
                {formik.touched.userName && formik.errors.userName ? (<span className="text-danger">{formik.errors.userName}</span>):null}
           </div>
           

           <div className="d-flex flex-column col-5">
                <label>Password:</label>    {/*password-field*/}
                <input
                name="userPassword"
                 className="border border-none rounded shadow-sm"
                value={formik.values.userPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}/>  
                {formik.touched.userPassword && formik.errors.userPassword ?(<span className="text-danger">{formik.errors.userPassword}</span>):null}
           </div> 

           <div className="d-flex flex-column col-4">
             <label>Confirm Password:</label>
             <input
             name="confirmPassword"
             className="border border-none rounded shadow-sm"
             value={formik.values.confirmPassword}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}/> 
            { formik.touched.confirmPassword  && formik.errors.confirmPassword ? (
                <span className="text-danger">{formik.errors.confirmPassword}</span>
            ):null }
           </div>

           <div className="d-flex flex-column col-5">
           <label>Email:</label>
            <input
            name="userEmail"
            className="border border-none rounded shadow-sm"
            value={formik.values.userEmail}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/> 
           {formik.touched.userEmail && formik.errors.userEmail ? ( <span className="text-danger">{formik.errors.userEmail}</span>):null}
           </div>

           <div className="d-flex flex-column col-4">
           <label>Phone Number:</label>
            <input
            className="border border-none rounded shadow-sm"
            name="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/> 
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (<span className="text-danger">{formik.errors.phoneNumber}</span>):null}
           </div>

           <div className="d-flex flex-column col-5">
           <label>Age:</label>
            <input
            name="userAge"
             className="border border-none rounded shadow-sm"
            value={formik.values.userAge}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/> 
            {formik.touched.userAge && formik.errors.userAge ?(<span  className="text-danger">{formik.errors.userAge}</span>):null}
           </div>

           <div className="d-flex flex-column col-9 px-2 ">
           <label>Address:</label>
            <textarea 
            name="userAddress"
             className="border border-none rounded shadow-sm"
            value={formik.values.userAddress}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/> 
            {formik.touched.userAddress&&formik.errors.userAddress ?(<span className="text-danger">{formik.errors.userAddress}</span>):null}
           </div>
                        
            <div className="col-9 d-flex flex-column">
            <button 
            className="align-self-end rounded  btn-primary shadow">Submit</button>
            </div>
        </form>
        </>
    );
};

