import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <ul className='nav justify-content-center'>
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="add">Add</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="about">About</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="contacts">Contacts</NavLink>
            </li>
        </ul>

    );
};

export default NavBar;