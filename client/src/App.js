import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Landing from './components/common/Landing';
import TweetTeam from './components/tweets/TweetTeam';
import TweetPlayers from './components/tweets/TweetPlayers';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Landing} />
          <Route path="/team" component={TweetTeam} />
          <Route path="/players" component={TweetPlayers} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
