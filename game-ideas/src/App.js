import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import GameIdeasContainer from './containers/GameIdeasContainer';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/game-ideas" render={(routerProps) => <GameIdeasContainer {...routerProps} />} />
        </div>
      </Router>
    );
  }
  
}

export default App;
