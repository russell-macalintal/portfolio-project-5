import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/game-ideas">Game Ideas</NavLink>
            <NavLink to="/login">Login</NavLink>
        </div>
    )
}

export default NavBar;