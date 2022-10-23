import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light mb-5">
                <div className="container-fluid d-flex justify-content-between">
                    <Link className="navbar-brand" to="/"><h1 className='font-weight-bold'>Quiz & Ans</h1></Link>
                    <div className="">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink
                                        to='/'
                                        title='Home'
                                        className={({ isActive }) => isActive ? 'text-primary nav-link' : 'text-Black nav-link'} >
                                        Topic
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to='chart'
                                        title='Chart'
                                        className={({ isActive }) => isActive ? 'text-primary nav-link' : 'text-Black nav-link'} >
                                        Statics
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to='blog'
                                        title='Blog'
                                        className={({ isActive }) => isActive ? 'text-primary nav-link' : 'text-Black nav-link'} >
                                        Blog
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;