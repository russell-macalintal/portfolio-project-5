import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class GameIdeas extends Component {
    renderIdeas = () => {
        return this.props.ideas.map( idea => (
            <Link className="list-item" key={idea.uid} to={`/game-ideas/${idea.uid}`}>
                {idea.title}
            </Link>
        ))
    }

    render() {
        return (
            <div className="info-section game-links">
                <h2>Game Ideas</h2>
                <h3>Click on a title for more information</h3>
                {this.renderIdeas()}
            </div>
        )
    }
}