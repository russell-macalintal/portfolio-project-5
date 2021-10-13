import React, { Component } from 'react';
import {v1 as uuid} from 'uuid';

export default class GamesIdeasInput extends Component {
    state = {
        title: "",
        content: ""
    }
    
    handleOnSubmit = (event) => {
        event.preventDefault();
        const idea = {...this.state, uid: uuid()}
        this.props.add(idea);
        this.setState({
            title: "",
            content: ""
        })
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
                    <input type="text" name="title" onChange={this.handleOnChange} value={this.state.title} placeholder="Give Your Idea a Title"/>
                    <textarea name="content" rows="4" cols="50" onChange={this.handleOnChange} value={this.state.content} placeholder="Write Your Idea Here..." />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}