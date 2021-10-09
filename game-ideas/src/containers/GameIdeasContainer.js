import React, { Component } from 'react';
import GameIdeasInput from '../components/ideas/GameIdeasInput';
import GameIdeas from '../components/ideas/GamesIdeas';

export default class GameIdeasContainer extends Component {
    componentDidMount() {
        // code to fetch existingn GameIdeas and Comments from Rails API
    }

    render() {
        return (
            <div>
                <GameIdeasInput />
                <GameIdeas />
            </div>
        )
    }
}