import './Navbar.css'
export function Navbar() { 
    return(
        <>
        <nav className="navbar navbar-expand-md bg-white shadow mb-5 text-white px-lg-5 position-fixed top-0 w-100">
            <h5 className='text-secondary ps-4'>React</h5>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
             <i className='ms-auto  d-md-none bx bx-menu text-dark fs-2 '></i>
            </button>
            <div className="collapse navbar-collapse" id='navbarSupportedContent'>
            <ul className="navbar-nav ms-auto ps-4">
                <li className="nav-item  text-secondary pt-2 pe-2  position-relative me-2 " id="useState"  >
                   UseState 
                   <ul 
                    className={`navbar-nav navbar text-start  bg-white py-0 border-secondary shadow rounded position-absolute`} 
                    id='useStateul'>
                        <li className="nav-item border-bottom px-0 ps-1">
                        <a className="nav-link text-secondary px-0" href="/form">With-API</a>
                        </li>
                        <li className="nav-item px-0 ps-1">
                        <a className="nav-link text-secondary px-0" href="/non-api-form">Without-API</a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item text-secondary pt-2 pe-2    position-relative me-2" id="useReducer">
                    UseReducer
                    <ul 
                    className={`navbar-nav navbar text-start  bg-white py-0 border-secondary shadow rounded position-absolute`} 
                    id='useReducerul'>
                        <li className="nav-item border-bottom px-0 ps-1">
                        <a className="nav-link text-secondary px-0 " href="/usereducer/api-form">With-API</a>
                        </li>
                        <li className="nav-item px-0 ps-1">
                        <a className="nav-link text-secondary px-0" href="/usereducer/non-api-form">Without-API</a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item  text-secondary pt-2 pe-2    position-relative me-2" id="useReducer">
                    UseContext
                    <ul 
                    className={`navbar-nav navbar text-start  bg-white py-0 border-secondary shadow rounded position-absolute`} 
                    id='useReducerul'>
                        <li className="nav-item border-bottom px-0 ps-1">
                        <a className="nav-link text-secondary px-0 " href="/">With-API</a>
                        </li>
                        <li className="nav-item px-0 ps-1">
                        <a className="nav-link text-secondary px-0" href="/">Without-API</a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item  text-secondary pt-2 pe-2    position-relative me-2" id="useReducer">
                    UseFormik
                    <ul 
                    className={`navbar-nav navbar text-start  bg-white py-0 border-secondary shadow rounded position-absolute`} 
                    id='useReducerul'>
                        <li className="nav-item border-bottom px-0 ps-1">
                        <a className="nav-link text-secondary px-0 " href="/useformik/form">UseFormik</a>
                        </li>
                        <li className="nav-item px-0 ps-1">
                        <a className="nav-link text-secondary px-0" href="/useformik/reducer-form">Formik-Reducer</a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item  text-secondary pt-2 pe-2     position-relative me-2" id="redux">
                    Redux
                    <ul 
                    className={`navbar-nav navbar text-start  bg-white py-0 border-secondary shadow rounded position-absolute`} 
                    id='reduxul'>
                        <li className="nav-item border-bottom px-0 ps-1">
                        <a className="nav-link text-secondary px-0 " href="/useformik/form">AuthN & AuthR</a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item position-relative me-2" id="login">
                   <a id='loginlink' className='nav-link p-2 pt-1 pe-1 ps-1 text-center col-2 col-md-auto mt-1 bg-primary rounded text-white' href='/auth/register'>Register</a>
                </li>
                
            </ul>
            </div>
        </nav>
        </>
    );
};