import React, { Component } from 'react';
import GameIdeasInput from '../components/ideas/GameIdeasInput';
import GameIdeas from '../components/ideas/GameIdeas';
import GameIdea from '../components/ideas/GameIdea';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { addIdea, removeIdea, fetchIdeas } from '../actions/ideasActions';

class GameIdeasContainer extends Component {
    componentDidMount() {
        this.props.fetchIdeas();
    }
    
    render() {
        return (
            <div className="info-window">
                <GameIdeasInput add={this.props.add} userId={this.props.userId} user={this.props.user} />
                <GameIdeas ideas={this.props.ideas}/>
                <Route exact path={`${this.props.match.url}/:ideaId`} render={routerProps => <GameIdea {...routerProps} ideas={this.props.ideas} remove={this.props.remove} user={this.props.user} userId={this.props.userId} /> } />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ideas: state.ideas.list,
        user: state.user.current_username,
        userId: state.user.current_userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        add: idea => dispatch(addIdea(idea)),
        remove: ideaId => dispatch(removeIdea(ideaId)),
        fetchIdeas: () => dispatch(fetchIdeas())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameIdeasContainer);