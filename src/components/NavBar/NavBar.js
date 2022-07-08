import React from 'react';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="add">Add</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contacts">Contacts</NavLink>
        </nav>
    );
};

export default NavBar;