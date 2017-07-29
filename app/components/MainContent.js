import React from 'react';
import Sidebar from './sidebar/Sidebar';
import MainFeed from './user-feed/MainFeed';

class MainContent extends React.Component {
  render() {
    return (
      <div className='main-content-wrapper'>
        <div className='row'>
          <Sidebar/>
          <MainFeed/>
        </div>
      </div>
    )
  }
}

export default MainContent;
