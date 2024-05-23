import '../styles/CrudForm.css';
export const CrudForm = () => {

    return(
        <form className='crudForm d-flex flex-column justify-content-center align-items-center'>
           <div>
              <label>Name:</label>
              <br/>
              <input className='rounded border '/>
           </div>
           <div>
              <label>Password:</label>
              <br/>
              <input className='rounded border'/>
           </div>
           <div>
              <button className='btn btn-primary mt-2'>Submit</button>
           </div>
        </form>
    );
};