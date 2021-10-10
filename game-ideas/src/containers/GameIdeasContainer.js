import React, { Component } from 'react';
import GameIdeasInput from '../components/ideas/GameIdeasInput';
import GameIdeas from '../components/ideas/GameIdeas';
import { connect } from 'react-redux';

class GameIdeasContainer extends Component {
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

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(GameIdeasContainer);