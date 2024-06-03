import { useDispatch, useSelector } from "react-redux";
import { CREATE_USER_NAME, CREATE_USER_PASSWORD, fetchDataRequest } from "../action/CrudAction";
import { useEffect } from "react";

export function CrudForm() {
   
   const  userName  = useSelector( state => state.userName );
   const  userPassword = useSelector( state => state.userPassword );
   const  id = useSelector( state => state.id );
   const dispatch = useDispatch();
   const handleChange = (e) => {
      const { name,value } = e.target;
      dispatch( {type:name,payload:value} );
   };

   useEffect( () => {
      dispatch(fetchDataRequest());
   },[dispatch])

   console.log(id);
   return(
      <>
      <section 
      className="d-flex justify-content-center align-items-center vh-100">
         <form 
         className="border border-2 border-secondary gap-2 d-flex 
         flex-column p-5 rounded">
            <h1 className="text-center">Register</h1>
            <label>Name:</label>
            <input 
            name={CREATE_USER_NAME}
            value={userName}
            className="rounded border shadow-none"
            onChange={handleChange}/>
            <label>Password:</label>
            <input 
            name={CREATE_USER_PASSWORD}
            value={userPassword}
            className="border rounded shadow-none"
            onChange={handleChange}/>
            <button 
            className="align-self-end rounded border btn py-1 btn-primary">
               Submit</button>
         </form>
      </section>
      </>
   );
};