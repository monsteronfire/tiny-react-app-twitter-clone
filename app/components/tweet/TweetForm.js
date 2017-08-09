import React from 'react';
import TweetStatusBar from './TweetStatusBar';

class TweetForm extends React.Component {
  render() {
    return (
      <div className='tweet-form-wrapper'>
        <h2>Compose new Tweet</h2>
        <form>
          <textarea></textarea>
          <TweetStatusBar/>
        </form>
      </div>
    )
  }
}

export default TweetForm;
