import './Navbar.css'
export function Navbar() { 
    return(
        <>
        <nav className="navbar navbar-expand bg-light shadow mb-5 text-white px-5 position-fixed top-0 w-100">
            <h5 className='text-secondary'>React</h5>
            <ul className="navbar-nav ms-auto">
                <li className="nav-item btn btn-secondary position-relative" id="useState"  >
                   UseState 
                   <ul 
                    className={`navbar-nav navbar bg-white p-1 border-secondary shadow rounded position-absolute`} 
                    id='useStateul'>
                        <li className="nav-item border-bottom">
                        <a className="nav-link text-secondary" href="/form">With-Api</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-secondary" href="/non-api-form">Without-Api</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        </>
    );
};