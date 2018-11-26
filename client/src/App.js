import React, { Component } from 'react';
import './App.css';

import Footer from './components/layout/Footer';
import TweetStream from './components/tweets/TweetStream';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TweetStream />
        <Footer />
      </div>
    );
  }
}

export default App;
