import React, { Component } from 'react';

import TweetTeam from './TweetTeam';
import TweetPlayers from './TweetPlayers';
import { Button } from 'react-materialize';

export class TweetFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeFeed: <TweetTeam />
    };
  }

  handleFeedPicker(e) {
    console.log('this is:', e.target.innerHTML);
    if (e.target.innerHTML === 'person') {
      this.setState({
        activeFeed: <TweetPlayers />
      });
    }

    if (e.target.innerHTML === 'group') {
      this.setState({
        activeFeed: <TweetTeam />
      });
    }
  }

  render() {
    let feed = this.state.activeFeed;

    const feedPicker = (
      <Button
        floating
        fab="vertical"
        icon="unfold_more"
        className="red"
        large
        style={{ bottom: '45px', right: '24px' }}
      >
        <Button
          onClick={e => this.handleFeedPicker(e)}
          floating
          icon="person"
          className="green"
        />

        <Button
          onClick={e => this.handleFeedPicker(e)}
          floating
          icon="group"
          className="yellow darken-1"
        />
      </Button>
    );
    return (
      <div>
        <p>Tweet Feed</p>

        {feed}

        {feedPicker}
      </div>
    );
  }
}

export default TweetFeed;
