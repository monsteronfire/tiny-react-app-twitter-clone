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
        <div className='nav-left'>
          <NavMenu/>
        </div>

        <NavLogo/>

        <div className='nav-right'>
          <SearchBar/>
          <DisplayPicture image={this.props.image}/>
          <TweetButton/>
        </div>
      </nav>
    )
  }
}

export default Nav;
