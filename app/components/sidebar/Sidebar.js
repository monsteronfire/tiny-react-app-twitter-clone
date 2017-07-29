import React from 'react';
import Bio from './Bio';
import TweetActivity from './TweetActivity';
import FollowSuggestions from './FollowSuggestions';
import TrendList from './TrendList';

class Sidebar extends React.Component {
  render() {
    return (
      <aside className='sidebar-wrapper'>
        <Bio/>
        <TweetActivity/>
        <FollowSuggestions/>
        <TrendList/>
      </aside>
    )
  }
}

export default Sidebar;
