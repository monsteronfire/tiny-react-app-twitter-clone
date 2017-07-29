import React from 'react';
import Nav from './nav/Nav';
import Profile from './profile/Profile';
import MainContent from './MainContent';
import { NavLink } from 'react-router-dom';

const dpImage = {
  url: 'app/images/profile-picture.jpg'
};

const header = {
  url: 'app/images/header-image.jpg'
};

class App extends React.Component {
  render() {
    return (
      <div className='main-wrapper'>
        <Nav dpImage={dpImage} />
        <Profile dpImageSize='large' dpImage={dpImage} header={header} />
        <MainContent/>
      </div>
    )
  }
}

export default App;
