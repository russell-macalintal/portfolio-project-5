import React, { Component } from 'react';
import {v1 as uuid} from 'uuid';
import { connect } from 'react-redux';
import { submitLogin, submitLogout } from '../actions/loginActions';

class Login extends Component {
    state = {
        username: ""
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        if(this.props.userId === "") {
            const user = {...this.state, uid: uuid()}
            this.setState({
                username: ""
            });
            this.props.submitLogin(user);
            // this.props.history.push('/game-ideas');
        } else {
            this.props.submitLogout();
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        if (this.props.userId === "") {
            return(
                <div className="container">
                    <form onSubmit={this.handleOnSubmit} >
                        <input id="username-input" type="text" name="username" onChange={this.handleOnChange} value={this.state.username} placeholder="Enter Username"/>
                        <input className="button" type="submit" value="Login"/>
                    </form>
                </div>
            )
        } else {
            return(
                <div className="container">
                    <h3>Logged In As: <span className="user-id">{this.props.user}</span></h3>
                    <form onSubmit={this.handleOnSubmit} >
                        <input className="button delete" type="submit" value="Logout" />
                    </form>
                </div>
            )
        }
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitLogin: user => dispatch(submitLogin(user)),
        submitLogout: () => dispatch(submitLogout())
    }
}

const mapStateToProps = state => {
    return {
        userId: state.user.current_userId,
        user: state.user.current_username
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);