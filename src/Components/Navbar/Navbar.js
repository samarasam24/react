import './Navbar.css'
export function Navbar() { 
    return(
        <>
        <nav className="navbar navbar-expand bg-light shadow mb-5 text-white px-5 position-fixed top-0 w-100">
            <h5 className='text-secondary'>React</h5>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item btn btn-secondary position-relative me-2 " id="useState"  >
                   UseState 
                   <ul 
                    className={`navbar-nav navbar text-start  bg-white py-0 border-secondary shadow rounded position-absolute`} 
                    id='useStateul'>
                        <li className="nav-item border-bottom px-0 ps-1">
                        <a className="nav-link text-secondary px-0" href="/form">With-Api</a>
                        </li>
                        <li className="nav-item px-0 ps-1">
                        <a className="nav-link text-secondary px-0" href="/non-api-form">Without-Api</a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item btn btn-secondary position-relative me-2" id="useReducer">
                    UseFormik
                    <ul 
                    className={`navbar-nav navbar text-start  bg-white py-0 border-secondary shadow rounded position-absolute`} 
                    id='useReducerul'>
                        <li className="nav-item border-bottom px-0 ps-1">
                        <a className="nav-link text-secondary px-0 " href="/useformik/reducer-form">UseFormik</a>
                        </li>
                        <li className="nav-item px-0 ps-1">
                        <a className="nav-link text-secondary px-0" href="/useformik/reducer-form">UseReducer</a>
                        </li>
                    </ul>
                </li>
                <li className="nav-item btn btn-secondary position-relative " id="useReducer">
                    UseReducer
                    <ul 
                    className={`navbar-nav navbar text-start  bg-white py-0 border-secondary shadow rounded position-absolute`} 
                    id='useReducerul'>
                        <li className="nav-item border-bottom px-0 ps-1">
                        <a className="nav-link text-secondary px-0 " href="/usereducer/api-form">With-Api</a>
                        </li>
                        <li className="nav-item px-0 ps-1">
                        <a className="nav-link text-secondary px-0" href="/usereducer/non-api-form">Without-Api</a>
                        </li>
                    </ul>
                </li>
                
            </ul>
        </nav>
        </>
    );
};