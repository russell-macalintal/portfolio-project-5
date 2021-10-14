import React, { Component } from 'react';
import {v1 as uuid} from 'uuid';
import { connect } from 'react-redux';
import { submitLogin } from '../actions/login';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = {
        username: ""
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        const user = {...this.state, uid: uuid()}
        this.props.submitLogin(user);
        this.setState({
            username: ""
        });
        <Redirect to="/game-ideas" />
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleOnSubmit} >
                    <input type="text" name="username" onChange={this.handleOnChange} value={this.state.username} placeholder="Enter Username"/>
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        submitLogin: user => dispatch(submitLogin(user))
    }
}

export default connect(null, mapDispatchToProps)(Login);