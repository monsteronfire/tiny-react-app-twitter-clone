import React from 'react';
import NavMenu from './NavMenu';
import NavLogo from './NavLogo';
import SearchBar from './SearchBar';
import DisplayPicture from './DisplayPicture';
import TweetButton from './TweetButton';

class Nav extends React.Component {
  render() {
    return (
      <nav className='nav-wrapper'>
        <NavMenu/>
        <NavLogo/>
        <SearchBar/>
        <DisplayPicture/>
        <TweetButton/>
      </nav>
    )
  }
}

export default Nav;
