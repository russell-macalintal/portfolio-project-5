import React, { Component } from 'react';
import GameIdeasInput from '../components/ideas/GameIdeasInput';
import GameIdeas from '../components/ideas/GameIdeas';
import GameIdea from '../components/ideas/GameIdea';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { addIdea, removeIdea } from '../actions/ideasActions';

class GameIdeasContainer extends Component {
    render() {
        return (
            <div>
                <h2>Share Your Own Idea!</h2>
                <GameIdeasInput add={this.props.add} />
                <GameIdeas ideas={this.props.ideas}/>
                <Route exact path={`${this.props.match.url}/:ideaId`} render={routerProps => <GameIdea {...routerProps} ideas={this.props.ideas} remove={this.props.remove} /> } />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ideas: state.ideas
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: idea => dispatch(addIdea(idea)),
        remove: ideaId => dispatch(removeIdea(ideaId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameIdeasContainer);