import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Navbar from '../src/components/layout/navbar/Navbar';
import Landing from './components/common/Landing';
import TweetFeed from './components/tweets/TweetFeed';
import TweetTeam from './components/tweets/TweetTeam';
import TweetPlayers from './components/tweets/TweetPlayers';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={TweetFeed} />
          <Route exact path="/feed" component={TweetFeed} />
          <Route path="/team" component={TweetTeam} />
          <Route path="/players" component={TweetPlayers} />
        </div>
      </Router>
    );
  }
}

export default App;
