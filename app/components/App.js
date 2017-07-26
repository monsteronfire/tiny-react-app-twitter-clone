import React from 'react';
import Nav from './nav/Nav';
import Profile from './profile/Profile';
import { NavLink } from 'react-router-dom';

const image = {
  url: 'app/images/profile-picture.jpg'
};

class App extends React.Component {
  render() {
    return (
      <div className='main-wrapper'>
        <Nav image={image} />
        <Profile/>
      </div>
    )
  }
}

export default App;
