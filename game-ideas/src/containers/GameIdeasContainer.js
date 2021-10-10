import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import GameIdeasInput from '../components/ideas/GameIdeasInput';
import GameIdeas from '../components/ideas/GameIdeas';
import { connect } from 'react-redux';

class GameIdeasContainer extends Component {
    render() {
        return (
            <div>
                <Link to={`${this.props.match.url}/submit-idea`}><h2>Share Your Own Idea!</h2></Link>
                <Route path={`${this.props.match.url}/submit-idea`} render={() => <GameIdeasInput />} />
                
                <GameIdeas idea={this.props.ideas}/>

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

}

// export default connect(mapStateToProps, mapDispatchToProps)(GameIdeasContainer);
export default GameIdeasContainer;