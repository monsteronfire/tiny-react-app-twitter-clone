import React from 'react';
import Bio from './Bio';
import TweetActivity from './TweetActivity';
import FollowSuggestions from './FollowSuggestions';
import TrendList from './TrendList';

const profile = {
  name: 'Belle Kitty',
  handle: '@bellekitty',
  bio: 'I didn\'t choose the kitty life, the kitty life chose me!'
};

const activity = {
  impressions: '1263',
  days: '28'
};

const suggestionsAPI = {
  suggestions: [
    { name: 'Tom', handle: '@tom' },
    { name: 'Dick', handle: '@dick' },
    { name: 'Harry', handle: '@harry' }
  ],
  all: function () {
    return this.suggestions;
  },
};

class Sidebar extends React.Component {
  render() {
    return (
      <aside className='sidebar-wrapper'>
        <Bio profile={profile} />
        <TweetActivity activity={activity} />
        <FollowSuggestions suggestionsapi={suggestionsAPI}/>
        <TrendList/>
      </aside>
    )
  }
}

export default Sidebar;
