import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import GameIdeasContainer from './containers/GameIdeasContainer';
import Login from './components/Login';

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/game-ideas" render={(routerProps) => <GameIdeasContainer {...routerProps} />} />
          <Route exact path="/login" component={Login} />
        </div>
      </Router>
    );
  }
  
}

export default App;
