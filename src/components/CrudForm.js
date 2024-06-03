 import { useDispatch, useSelector  } from "react-redux"; 
import { addUser, addUserForm } from "../actionCreater/ActionCreator";
import { ADD_USERNAME, ADD_USERPASSWORD } from "../type/Type";

 
export function CrudForm() {  

   const dispatch = useDispatch();
   const userName = useSelector( state => state.userName);  
   const userPassword = useSelector( state => state.userPassword);

   const handleChange = (e) => {
      const {name,value} = e.target;
      dispatch(addUser(name,value));
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(addUserForm({userName,userPassword}));
   };
   
   return(
      <>
      <section 
      className="d-flex justify-content-center align-items-center vh-100">
         <form 
         className="border border-2 border-secondary gap-2 d-flex 
         flex-column p-5 rounded"
         onSubmit={handleSubmit}>
            <h1 className="text-center">Register</h1>
            <label>Name:</label>
            <input
            name={ADD_USERNAME}
            value={userName}
            onChange={handleChange}  
            className="rounded border shadow-none" />
            <label>Password:</label>
            <input
            value={userPassword}
            name={ADD_USERPASSWORD}  
            onChange={handleChange}
            className="border rounded shadow-none"/>
            <button 
            className="align-self-end rounded border btn py-1 btn-primary">
               Submit</button>
         </form> 
      </section>
      </>
   );
};