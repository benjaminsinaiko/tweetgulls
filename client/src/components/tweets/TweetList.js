import React, { Component } from 'react';
import axios from 'axios';

import TweetCard from './TweetCard';

export class TweetList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      searchTerm: '',
      tweets: [],
      refreshUrl: ''
    };
  }

  componentDidMount() {
    axios
      .get('/api/tweets')
      .then(response => {
        this.setState({
          searchTerm: response.data.search_metadata.query
        });
        this.setState({ tweets: response.data.statuses });
        this.setState({
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

    let loading = (
      <div>
        <p className="flow-text">Listening to Streams</p>
        <div className="progress lime lighten-3">
          <div className="indeterminate pink accent-1" />
        </div>
      </div>
    );

    return (
      <div className="row">
        <div className="col s12 m4 14">
          <h3>{this.state.searchTerm}</h3>
        </div>
        <div className="col s12 m4 14">
          <div>{tweets.length > 0 ? tweetCard : loading}</div>
        </div>
      </div>
    );
  }
}

export default TweetList;
