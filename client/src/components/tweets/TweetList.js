import React, { Component } from 'react';
import axios from 'axios';

import Loading from '../common/Loading';
import TweetCard from './TweetCard';
import styles from './TweetList.module.css';

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

    return (
      <div>
        <div className={`row ${styles.TweetListBody}`}>
          <div className="col s12 m4 14">
            <h3>{this.state.searchTerm}</h3>
          </div>
          <div className="col s12 m4 14">
            <div>{tweets.length > 0 ? tweetCard : <Loading />}</div>
          </div>
        </div>

        <button data-target="modal1" class="btn modal-trigger">
          Modal
        </button>

        <div id="modal1" class="modal">
          <div class="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">
              Agree
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default TweetList;
