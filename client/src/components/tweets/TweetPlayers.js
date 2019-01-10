import React, { Component } from 'react';
import axios from 'axios';

import Loading from '../common/Loading';
import TweetCard from './TweetCard';

export class TweetPlayers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tweets: []
    };
  }

  componentDidMount() {
    axios
      .get('/api/tweets/players')
      .then(response => {
        this.setState({
          tweets: response.data
        });
      })
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    let tweets = this.state.tweets;

    let tweetCard = tweets.map((tweet, index) => (
      <TweetCard key={index} tweet={tweet} />
    ));

    return (
      <div>
        <div className="row">
          <div className="col s12 m4 14" />
          <div className="col s12 m4 14">
            <div>{tweets.length > 0 ? tweetCard : <Loading />}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TweetPlayers;
