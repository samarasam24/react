import { useState } from 'react';
import './Navbar.css'
export function Navbar() {
    const [active,setActive] = useState({
        UseState:false
    });
    return(
        <>
        <nav className="navbar bg-secondary mb-5 text-white px-5 position-fixed top-0 w-100">
            <h5>React</h5>
            <ul className="navbar-nav ">
                <li className="nav-item btn btn-secondary" id="useState"  
                onClick={() => 
                setActive( value => ({...value,UseState:!value.UseState})
                )}>
                   UseState
                  
                </li>
            </ul>
        </nav>
        <ul 
        className={  `${ active.UseState ? 'd-block':'d-none'} navbar-nav bg-white p-1 border-secondary shadow rounded position-absolute`} id='useStateul'>
            <li className="nav-item border-bottom">
            <a className="nav-link text-dark" href="/form">With-Api</a>
            </li>
            <li className="nav-item">
            <a className="nav-link text-dark" href="/non-api-form">Without-Api</a>
            </li>
        </ul>
        </>
    );
};