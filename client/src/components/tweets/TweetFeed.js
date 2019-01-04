import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'react-materialize';

export class TweetFeed extends Component {
  render() {
    const feedPicker = (
      <Button
        floating
        fab="vertical"
        icon="unfold_more"
        className="red"
        large
        style={{ bottom: '45px', right: '24px' }}
      >
        <Link to="/players">
          <Button floating icon="person" className="green" />
        </Link>
        <Link to="/team">
          <Button floating icon="group" className="yellow darken-1" />
        </Link>
      </Button>
    );
    return (
      <div>
        <p>Tweet Feed</p>

        {feedPicker}
      </div>
    );
  }
}

export default TweetFeed;
