import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const NavBar = (props) => {
    console.log(props.userId);
    const renderLogin = () => {
        if (props.userId === "") {
            return 'Login'
        } else {
            return 'Logout'
        }
    }

    return(
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/game-ideas">Game Ideas</NavLink>
            <NavLink to="/login">{renderLogin()}</NavLink>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userId: state.user.current_userId
    }
}
export default connect(mapStateToProps)(NavBar);