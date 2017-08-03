import React from 'react';
import SuggestionItem from './SuggestionItem';

class FollowSuggestions extends React.Component {
  render() {
    return (
      <div className='follow-suggestions-wrapper'>
        <h3>Who to follow</h3>
        <ul>
          {
            this.props.suggestionsapi.all.map(function(s) {
              s.name
            })
          }
        </ul>
      </div>
    )
  }
}

export default FollowSuggestions;
