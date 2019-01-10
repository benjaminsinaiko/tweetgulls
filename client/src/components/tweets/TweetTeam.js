import React, { Component } from 'react';
import axios from 'axios';

import Loading from '../common/Loading';
import TweetCard from './TweetCard';

export class TweetTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      tweets: [],
      refreshUrl: ''
    };
  }

  componentDidMount() {
    axios
      .get('/api/tweets/team')
      .then(response => {
        this.setState({
          title: response.data.search_metadata.query,
          tweets: response.data.statuses,
          refreshUrl: response.data.search_metadata.refresh_url
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

export default TweetTeam;
