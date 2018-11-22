import React from 'react';

const TweetCard = props => {
  return (
    <div>
      <div className="card-panel grey lighten-5 z-depth-3 hoverable thin">
        <div className="row valign-wrapper">
          <div className="col s2">
            <img
              src={props.tweet.user.profile_image_url}
              alt={props.tweet.user.name}
              className="circle responsive-img"
            />
          </div>
          <div className="col s10 left-align">
            <h6>{props.tweet.user.name}</h6>
            <span className="black-text">{props.tweet.text}</span>
          </div>
        </div>

        <div className="valign-wrapper right-align chip hoverable">
          <a
            href={`https://twitter.com/${props.tweet.user.screen_name}`}
            target="_blank"
            rel="noopener noreferrer"
          >{`@${props.tweet.user.screen_name}`}</a>
        </div>
        <div className="valign-wrapper right-align chip hoverable">
          {new Date(props.tweet.created_at).toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
};

export default TweetCard;
