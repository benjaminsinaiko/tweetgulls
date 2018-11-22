import React, { Component } from 'react';
import './App.css';

import Footer from './components/layout/Footer';
import TweetList from './components/tweets/TweetList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TweetList />
        <Footer />
      </div>
    );
  }
}

export default App;
