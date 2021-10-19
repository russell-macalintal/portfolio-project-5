import '../App.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const NavBar = (props) => {
    const renderLogin = () => {
        if (props.userId === "") {
            return 'LOGIN'
        } else {
            return 'LOGOUT'
        }
    }

    return(
        <div className="nav-menu">
            <NavLink className="menu-item" to="/">HOME</NavLink>
            <NavLink className="menu-item" to="/about">ABOUT</NavLink>
            <NavLink className="menu-item" to="/game-ideas">GAME IDEAS</NavLink>
            <NavLink className="menu-item" to="/login">{renderLogin()}</NavLink>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.user.current_userId
    }
}
export default connect(mapStateToProps)(NavBar);