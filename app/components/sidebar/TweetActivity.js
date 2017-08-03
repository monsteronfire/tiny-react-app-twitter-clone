import React from 'react';

class TweetActivity extends React.Component {
  render() {
    return (
      <div className='tweet-activity-wrapper'>
        <h3>Your Tweet activity</h3>
        <p>Your Tweets earned {this.props.activity.impressions} impressions over the last {this.props.activity.days} days</p>
        <a href="#">View your top Tweets</a>
      </div>
    )
  }
}

export default TweetActivity;
