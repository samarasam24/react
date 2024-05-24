import { useDispatch, useSelector } from 'react-redux';
import '../styles/CrudForm.css'; 
import { SUBMIT_FORM } from '../action/CrudAction';

export const CrudForm = () => {  

   //global state access

   // const selectName = (state) => state.userName;   //this  method is a another way of accessing values
   // const selectPassword = (state) => state.userPassword;
   const userName = useSelector(state => state.userName); //a selector allows to extract data form a redux-store
   const userPassword = useSelector(state => state.userPassword);  

   //action dispatch
   const dispatch = useDispatch();

   //input handler
   const handleChange = (e) => {

      //this was destructuring the e.target object values, name and value
      const { name,value } = e.target;

      dispatch({type:name,payload:value}); //here i sending the values to the reducer in payload

   };

   //form handler
   const handleSubmit = (e) => {

      e.preventDefault();

      dispatch({type:SUBMIT_FORM}); 
   };
   
    return( 
        <form 
        className='crudForm d-flex flex-column justify-content-center align-items-center'
        onSubmit={handleSubmit}>
           <div>
              <label>Name:</label>
              <br/>
              <input 
              className='rounded border' 
              name='CREATE_USER_NAME' 
              value={userName} onChange={handleChange}/> 
           </div>
           <div>
              <label>Password:</label>
              <br/>
              <input 
              className='rounded border' 
              name='CREATE_USER_PASSWORD' 
              value={userPassword} onChange={handleChange}/>
           </div>
           <div>
              <button className='btn btn-primary mt-2'>Submit</button>
           </div>
        </form>
    );
};