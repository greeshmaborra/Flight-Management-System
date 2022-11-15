import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
    const iconStyle = {
        color: 'white'
    }
    const iconStyle2 = {
        color: "#CCCCCC"
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <i class="fas fa-paper-plane mr-1" style={iconStyle}></i>
            <Link className="navbar-brand" to={{pathname: "/"}}>GSK Airlines</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ml-1" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {sessionStorage.getItem('userType')==='Customer' ? (
                        <div className='form-inline'>
                            <li className="nav-item">
                                <Link className='nav-link' to={ {pathname: "/booking/view"} }>Your bookings</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to={ {pathname: "/scheduleFlight"} }>All flights</Link>
                            </li>
                        </div>
                    ) : null}
                    {sessionStorage.getItem('userType')==='Admin' ? (
                        <li className="nav-item">
                            <Link className='nav-link' to={ {pathname: "/links"} }><i class="fas fa-user-cog"></i> Admin Tools</Link>
                        </li>
                    ) : null}
                </ul>
                <div className='navbar-nav'>
                    <span className='form-inline'>
                        <Link className='nav-link' to={ {pathname: "/scheduleFlight/search"} }><i class="fas fa-plane-departure mr-1" style={iconStyle2}></i>Search Flights</Link>
                        {sessionStorage.getItem('userId')!==null ? ( 
                                <Link className='nav-link' to={{pathname: "/logout"}}><i class="fas fa-sign-out-alt" style={iconStyle2}></i> Logout</Link>
                        ) : <Link className='nav-link' to={{pathname: "/login"}}><i class="fas fa-sign-in-alt" style={iconStyle2}></i> Login</Link>}
                    </span>
                </div>
            </div>
        </nav>
    );
}

export default Header;
