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
            this.props.submitLogin(user);
            this.setState({
                username: ""
            });
            this.props.history.push('/game-ideas');
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
                <div>
                    <form onSubmit={this.handleOnSubmit} >
                        <input type="text" name="username" onChange={this.handleOnChange} value={this.state.username} placeholder="Enter Username"/>
                        <input type="submit" />
                    </form>
                </div>
            )
        } else {
            return(
                <div>
                    <h3>Logged In As: {this.props.user}</h3>
                    <form onSubmit={this.handleOnSubmit} >
                        <h3>Logout?</h3>
                        <input type="submit" />
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